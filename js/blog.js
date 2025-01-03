buttonMenuMobile = document.getElementById("header-mobile-menu");
buttonMenuMobile.addEventListener("click", menuMobile);
buttonHideRecent = document.getElementById("blog-recent-hide");
buttonHideRecent.addEventListener("click", hideRecent);
buttonShowRecent = document.getElementById("blog-recent-show");
buttonShowRecent.addEventListener("click", showRecent);

function menuMobile(evento) {
    clicked = evento.target;
    listMenuMobile = document.getElementById("list-menu-mobile");
    if (clicked) {
        if (listMenuMobile.style.display === 'block') {
            listMenuMobile.style.display = "none";    
        } else {
            listMenuMobile.style.display = "block";
            listMenuMobile.style.position = "absolute";
            listMenuMobile.style.top = "30%";
            listMenuMobile.style.left = "3%";
            listMenuMobile.style.paddingLeft = "10vh";
            listMenuMobile.style.border = "solid 0.2vh var(--color-one)";
            listMenuMobile.style.borderRadius = "2vh";
            listMenuMobile.style.backgroundColor = "var(--color-seven)";
            listMenuMobile.style.width = "40vh";
            listMenuMobile.style.height = "40vh";
        }
    } 
}

function hideRecent(event) {
    clicked = event.target;
    fullSize = document.getElementById("blog-post");
    hideScreen = document.getElementById("blog-recent");
    iconShow = document.getElementById("blog-recent-show");

    if (clicked) {
        fullSize.style.width = "100%";
        hideScreen.style.display = "none";
        iconShow.style.display = "block"
    } 
}

function showRecent(event) {
    clicked = event.target;
    fullSize = document.getElementById("blog-post");
    hideScreen = document.getElementById("blog-recent");
    iconShow = document.getElementById("blog-recent-show");

    if (clicked) {
        hideScreen.style.display = "block";
        iconShow.style.display = "none"
    } 
}