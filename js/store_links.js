// Single source of truth for the app store links used across the site.
// Load this before any script or page that links to a store.
window.GOALPE = window.GOALPE || {};

window.GOALPE.APP_STORE_URL =
    'https://apps.apple.com/us/app/goalpe-daily-fantasy-football/id6773258294';

window.GOALPE.PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=live.goalpe.mobileapp';

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
