



function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbg = document.getElementById("navBg");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky","shadow");
        navbg.classList.add("stickyBg");
    } else {
        navbar.classList.remove("sticky","shadow");
        navbg.classList.remove("stickyBg");
    }
}