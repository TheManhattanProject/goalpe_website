// Store URLs live in /js/store_links.js, which must be loaded before this file.
(function () {
    function openStore(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    // Point an anchor at a store URL so it works as a normal link (crawlable,
    // opens in a new tab), and open it explicitly on click.
    function wire(el, getUrl) {
        if (!el) {
            return;
        }
        el.setAttribute('href', getUrl());
        el.addEventListener('click', function (event) {
            event.preventDefault();
            openStore(getUrl());
        });
    }

    function initCampaign() {
        var store = window.GOALPE || {};

        // "Play Now" and the app-store badges all funnel users to the app.
        // Play Now follows the visitor's platform; the badges are explicit.
        wire(document.getElementById('play-now'), function () {
            return store.getStoreUrl();
        });
        document.querySelectorAll('[data-store="ios"]').forEach(function (el) {
            wire(el, function () {
                return store.APP_STORE_URL;
            });
        });
        document.querySelectorAll('[data-store="android"]').forEach(function (el) {
            wire(el, function () {
                return store.PLAY_STORE_URL;
            });
        });

        var year = document.getElementById('camp-year');
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }

    document.addEventListener('DOMContentLoaded', initCampaign);
})();
