import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { Marked } from 'marked'
import { bundledLanguages, codeToHtml } from 'shiki'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import type { ViteSSGOptions } from 'vite-ssg'

const POSTS_DIR = 'src/posts'
const NOT_FOUND = '/404'
// Must match the og:image path set in PostView.vue
const POST_IMAGES_DIR = 'dist/og'

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

// Splits a post into its frontmatter fields and Markdown body
function parsePost(src: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(src)
  if (!match) return undefined

  const meta: Record<string, string> = Object.fromEntries(
    match[1].split(/\r?\n/).filter(Boolean).map((line) => {
      const colon = line.indexOf(':')
      return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()]
    }),
  )
  return { meta, body: match[2] }
}

// Turns src/posts/<slug>.md into a module exporting the post's frontmatter and rendered HTML
function posts(): Plugin {
  return {
    name: 'posts',
    async transform(src, id) {
      if (!id.endsWith('.md')) return

      const parsed = parsePost(src)
      if (!parsed) return this.error(`${id}: missing frontmatter`)
      for (const field of ['title', 'category', 'excerpt']) {
        if (!parsed.meta[field]) return this.error(`${id}: frontmatter is missing "${field}"`)
      }

      const post = { slug: basename(id, '.md'), ...parsed.meta, html: await marked.parse(parsed.body) }
      return { code: `export default ${JSON.stringify(post)}`, map: null }
    },
  }
}

const postFiles = () => readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'))

// Satori takes a tree of { type, props } instead of JSX
const el = (type: string, style: Record<string, unknown>, children?: unknown) =>
  ({ type, props: { style, children } })

// The link-preview image for each post: its category, title and the author, on the site's dark background
async function writePostImages() {
  const font = (weight: 400 | 600 | 700) => ({
    name: 'Inter',
    weight,
    style: 'normal' as const,
    data: readFileSync(`node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`),
  })
  const fonts = [font(400), font(600), font(700)]
  const avatar = `data:image/jpeg;base64,${readFileSync('public/profile.jpeg').toString('base64')}`
  const site = readFileSync('public/CNAME', 'utf8').trim()

  mkdirSync(POST_IMAGES_DIR, { recursive: true })
  for (const file of postFiles()) {
    const { meta } = parsePost(readFileSync(join(POSTS_DIR, file), 'utf8'))!
    const svg = await satori(
      el('div', {
        // Satori adds padding outside the size unless told otherwise
        width: 1200, height: 630, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '72px 80px', backgroundColor: '#0a0a0a', color: '#fafafa', fontFamily: 'Inter',
      }, [
        el('div', { display: 'flex', flexDirection: 'column', gap: 28 }, [
          el('div', { fontSize: 24, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#a3a3a3' }, meta.category),
          el('div', { fontSize: meta.title.length > 70 ? 56 : 68, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1 }, meta.title),
        ]),
        el('div', { display: 'flex', alignItems: 'center', gap: 24 }, [
          { type: 'img', props: { src: avatar, width: 72, height: 72, style: { borderRadius: 18 } } },
          el('div', { display: 'flex', flexDirection: 'column', gap: 4 }, [
            el('div', { fontSize: 28, fontWeight: 600 }, 'Ashwin Phadke'),
            el('div', { fontSize: 24, color: '#a3a3a3' }, site),
          ]),
        ]),
      ]) as Parameters<typeof satori>[0],
      { width: 1200, height: 630, fonts },
    )
    const png = new Resvg(svg).render().asPng()
    writeFileSync(join(POST_IMAGES_DIR, `${basename(file, '.md')}.png`), png)
  }
}

// Every pre-rendered URL, filled in by includedRoutes
let pages: string[] = []

const ssgOptions: ViteSSGOptions = {
  // One static page per post, so each has its own URL on GitHub Pages
  includedRoutes: (paths) => pages = paths.flatMap((path) => {
    if (path === '/blog/:slug') return postFiles().map((file) => `/blog/${basename(file, '.md')}`)
    // The catch-all route becomes 404.html
    return path.includes(':') ? NOT_FOUND : path
  }),
  async onFinished() {
    await writePostImages()

    // /blog is both a page (blog.html) and a folder of posts. Also serve the page from inside
    // the folder, in case the host resolves /blog to the folder first.
    copyFileSync('dist/blog.html', 'dist/blog/index.html')

    // List every page in sitemap.xml so search engines can find them
    const siteUrl = `https://${readFileSync('public/CNAME', 'utf8').trim()}`
    const urls = pages.filter((path) => path !== NOT_FOUND).map((path) => {
      const post = /^\/blog\/(.+)$/.exec(path)?.[1]
      const date = post && /^date:\s*(.+)$/m.exec(readFileSync(join(POSTS_DIR, `${post}.md`), 'utf8'))?.[1].trim()
      const lastmod = date ? `<lastmod>${date}</lastmod>` : ''
      return `<url><loc>${siteUrl}${path}</loc>${lastmod}</url>`
    })
    writeFileSync(
      'dist/sitemap.xml',
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    )
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), posts()],
  base: '/',
  ssgOptions,
})
