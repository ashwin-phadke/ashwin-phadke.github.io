import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Marked } from 'marked'
import { bundledLanguages, codeToHtml } from 'shiki'
import type { ViteSSGOptions } from 'vite-ssg'

const POSTS_DIR = 'src/posts'

// Code blocks are highlighted here, at build time, so no highlighter ships to the browser
const marked = new Marked({
  gfm: true,
  breaks: true,
  async: true,
  async walkTokens(token) {
    if (token.type !== 'code') return
    const requested = (token.lang ?? '').split(/\s+/)[0]
    const lang = requested in bundledLanguages ? requested : 'text'
    token.text = await codeToHtml(token.text, {
      lang,
      themes: { light: 'github-light', dark: 'github-dark' },
    })
  },
  renderer: {
    code: ({ text }) => text,
  },
})

// Turns src/posts/<slug>.md into a module exporting the post's frontmatter and rendered HTML
function posts(): Plugin {
  return {
    name: 'posts',
    async transform(src, id) {
      if (!id.endsWith('.md')) return

      const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(src)
      if (!match) return this.error(`${id}: missing frontmatter`)

      const meta = Object.fromEntries(
        match[1].split(/\r?\n/).filter(Boolean).map((line) => {
          const colon = line.indexOf(':')
          return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()]
        }),
      )
      for (const field of ['title', 'category', 'excerpt']) {
        if (!meta[field]) return this.error(`${id}: frontmatter is missing "${field}"`)
      }

      const post = { slug: basename(id, '.md'), ...meta, html: await marked.parse(match[2]) }
      return { code: `export default ${JSON.stringify(post)}`, map: null }
    },
  }
}

const postFiles = () => readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'))

const ssgOptions: ViteSSGOptions = {
  // One static page per post, so each has its own URL on GitHub Pages
  includedRoutes: (paths) => paths.flatMap((path) =>
    path === '/blog/:slug'
      ? postFiles().map((file) => `/blog/${basename(file, '.md')}`)
      : path),
  // List the home page and every post in sitemap.xml so search engines can find them
  onFinished() {
    const siteUrl = `https://${readFileSync('public/CNAME', 'utf8').trim()}`
    const urls = [
      `<url><loc>${siteUrl}/</loc></url>`,
      ...postFiles().map((file) => {
        const date = /^date:\s*(.+)$/m.exec(readFileSync(join(POSTS_DIR, file), 'utf8'))?.[1].trim()
        const lastmod = date ? `<lastmod>${date}</lastmod>` : ''
        return `<url><loc>${siteUrl}/blog/${basename(file, '.md')}</loc>${lastmod}</url>`
      }),
    ]
    writeFileSync(
      'dist/sitemap.xml',
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    )
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), posts()],
  base: '/',
  ssgOptions,
})
