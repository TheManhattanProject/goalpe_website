// Single source of truth for the app store links used across the site.
// Load this before any script or page that links to a store.
window.GOALPE = window.GOALPE || {};

window.GOALPE.APP_STORE_URL =
    'https://apps.apple.com/us/app/goalpe-daily-fantasy-football/id6773258294';

window.GOALPE.PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=live.goalpe.mobileapp';

// Link-preview crawlers must be left on the page so they read the og: tags in
// <head>. Most of them (facebookexternalhit/WhatsApp, Twitterbot, Slackbot,
// TelegramBot) never run JS and so never reach the redirect anyway; this is for
// the ones that do render - Googlebot, Applebot, and preview-as-a-service
// backends like Embedly/Iframely - which would otherwise report the App Store
// listing as our preview.
//
// Matches broadly rather than by an allowlist of names, which goes stale. A
// false positive is mild: that visitor sees the <noscript> store links instead
// of an automatic redirect.
window.GOALPE.CRAWLER_UA =
    /bot|crawler|spider|crawling|facebookexternalhit|whatsapp|slackbot|telegram|discord|embedly|iframely|microlink|preview|quora link|skypeuripreview|pinterest|vkshare|redditbot|applebot|yandex|baiduspider|duckduckbot/i;

window.GOALPE.isCrawler = function () {
    return window.GOALPE.CRAWLER_UA.test(navigator.userAgent || '');
};

window.GOALPE.getPlatform = function () {
    var ua = navigator.userAgent || '';
    if (/android/i.test(ua)) {
        return 'android';
    }
    if (/iphone|ipad|ipod/i.test(ua)) {
        return 'ios';
    }
    return 'other';
};

// Android goes to Play; iOS, desktop and anything undetected go to the App
// Store. iPadOS 13+ reports a desktop Safari user agent, so it lands here too.
window.GOALPE.getStoreUrl = function () {
    return window.GOALPE.getPlatform() === 'android'
        ? window.GOALPE.PLAY_STORE_URL
        : window.GOALPE.APP_STORE_URL;
};
