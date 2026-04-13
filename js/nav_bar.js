function handleOpenSideBar() {
    const sidebar = document.getElementById("navigation-side-bar");
    const hamburger = document.querySelector(".nav-menu");

    // Toggle sidebar
    if (sidebar.style.display === "flex") {
        // Close sidebar
        hamburger.classList.remove("active");
        sidebar.style.transform = "translateX(100%)";
        setTimeout(() => {
            sidebar.style.display = "none";
        }, 300);
    } else {
        // Open sidebar
        hamburger.classList.add("active");
        sidebar.style.display = "flex";
        setTimeout(() => {
            sidebar.style.transform = "translateX(0)";
        }, 10);
    }
}

function handleCloseSideBar() {
    const sidebar = document.getElementById("navigation-side-bar");
    const hamburger = document.querySelector(".nav-menu");

    hamburger.classList.remove("active");
    sidebar.style.transform = "translateX(100%)";
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 300);
}

// Auto-close sidebar when resizing to desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth > 1000) {
        const sidebar = document.getElementById("navigation-side-bar");
        const hamburger = document.querySelector(".nav-menu");

        if (sidebar && sidebar.style.display === "flex") {
            handleCloseSideBar();
        }
    }
});