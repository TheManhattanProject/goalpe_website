// Store URLs live in /js/store_links.js, which must be loaded before this file.
function openAppStore() {
    window.open(window.GOALPE.APP_STORE_URL, '_blank', 'noopener,noreferrer');
}

function openPlayStore() {
    window.open(window.GOALPE.PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
}

function openStoreForPlatform() {
    window.open(window.GOALPE.getStoreUrl(), '_blank', 'noopener,noreferrer');
}

function initDownloadLinks() {
    document.querySelectorAll('nav button').forEach(function (button) {
        if (button.textContent.trim() === 'Download Now') {
            button.addEventListener('click', openStoreForPlatform);
        }
    });

    document.querySelectorAll('button').forEach(function (button) {
        var label = button.textContent.trim();
        if (label === 'Download for IOS') {
            button.addEventListener('click', openAppStore);
        }
        if (label === 'Download for Android') {
            button.addEventListener('click', openPlayStore);
        }
    });

    document.querySelectorAll('img[alt="apple_store"]').forEach(function (image) {
        image.style.cursor = 'pointer';
        image.addEventListener('click', openAppStore);
    });

    document.querySelectorAll('img[alt="google-play"]').forEach(function (image) {
        image.style.cursor = 'pointer';
        image.addEventListener('click', openPlayStore);
    });
}

document.addEventListener('DOMContentLoaded', initDownloadLinks);
