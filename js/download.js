const APP_STORE_URL =
    'https://apps.apple.com/us/app/goalpe-daily-fantasy-football/id6773258294';

function openAppStore() {
    window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
}

function initDownloadLinks() {
    document.querySelectorAll('nav button').forEach(function (button) {
        if (button.textContent.trim() === 'Download Now') {
            button.addEventListener('click', openAppStore);
        }
    });

    document.querySelectorAll('button').forEach(function (button) {
        if (button.textContent.trim() === 'Download for IOS') {
            button.addEventListener('click', openAppStore);
        }
    });

    document.querySelectorAll('img[alt="apple_store"]').forEach(function (image) {
        image.style.cursor = 'pointer';
        image.addEventListener('click', openAppStore);
    });
}

document.addEventListener('DOMContentLoaded', initDownloadLinks);
