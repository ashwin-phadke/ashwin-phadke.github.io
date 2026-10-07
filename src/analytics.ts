import { ref } from 'vue';

const GA_ID = 'G-H7SK0FEHQM';
const CONSENT_KEY = 'analytics-consent';

// Whether the consent banner is showing
export const consentBannerOpen = ref(false);

// European visitors are asked before Google Analytics loads. There is no server to look up
// their country, so this goes by the time zone of their device.
const EUROPEAN_ZONES = /^(Europe\/|Atlantic\/(Canary|Madeira|Azores|Reykjavik)$|Asia\/(Nicosia|Famagusta)$)/;
export const consentRequired = () => EUROPEAN_ZONES.test(Intl.DateTimeFormat().resolvedOptions().timeZone);

// Storage can be blocked, e.g. in private windows; the visitor is then asked again next time
const savedConsent = () => {
    try {
        return localStorage.getItem(CONSENT_KEY);
    } catch {
        return null;
    }
};

let loaded = false;
const loadAnalytics = () => {
    if (loaded) return;
    loaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.append(script);

    window.dataLayer = window.dataLayer || [];
    // gtag.js only understands the arguments object, not an array
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
};

// Call once in the browser: loads analytics straight away where no consent is needed or it
// was already given, and opens the banner for European visitors who have not chosen yet
export const initAnalytics = () => {
    const consent = savedConsent();
    if (!consentRequired() || consent === 'granted') loadAnalytics();
    else if (!consent) consentBannerOpen.value = true;
};

export const setConsent = (granted: boolean) => {
    try {
        localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
    } catch { }
    // Google's switch to stop an already loaded tag from sending anything
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !granted;
    if (granted) loadAnalytics();
    consentBannerOpen.value = false;
};
