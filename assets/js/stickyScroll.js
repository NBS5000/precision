



function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbg = document.getElementById("navBg");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky && !navbar.classList.contains("sticky")) {
        toggle_change("navbar","i","sticky");
        toggle_change("navbar","i","shadow");
        /*toggle_change("navBg","i","stickyBg");*/
    } else if(window.pageYOffset <= sticky) {
        navbar.classList.remove("sticky","shadow");
        navbg.classList.remove("stickyBg");
/*        toggle_change("navbar","i","sticky");
        toggle_change("navbar","i","shadow");
        toggle_change("navBg","i","stickyBg");*/
    }
}