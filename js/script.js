inputInformation = document.getElementById("information");
inputInformation.addEventListener("click", informationClick);
inputFormation = document.getElementById("formation");
inputFormation.addEventListener("click", formationClick);
buttonMenuMobile = document.getElementById("header-mobile-menu");
buttonMenuMobile.addEventListener("click", menuMobile)

function informationClick(evento) {
    clicked = evento.target;  
    informationDetail = document.getElementById("information-detail");
    formationDetail = document.getElementById("formation-detail");
    informationColorChanged = document.getElementById("information-highlight");
    formationColorChanged = document.getElementById("formation-highlight");
    if (clicked) {
        informationDetail.style.display = "block";
        formationDetail.style.display = "none";
        informationColorChanged.style.color = "#FAACC4";
        informationColorChanged.style.borderBottom = "solid 1vh #FAACC4";
        formationColorChanged.style.color = "#EBE3D0";
        formationColorChanged.style.borderBottom = "solid 1vh #EBE3D0";
    } else {
        informationDetail.style.display = "none";
        formationDetail.style.display = "block";
        informationColorChanged.style.color = "#EBE3D0";
        informationColorChanged.style.borderBottom = "solid 1vh #EBE3D0";
        formationColorChanged.style.color = "#FAACC4";
        formationColorChanged.style.borderBottom = "solid 1vh #FAACC4";
    };
}

function formationClick(evento) {
    clicked = evento.target;   
    informationDetail = document.getElementById("information-detail");
    formationDetail = document.getElementById("formation-detail");
    informationColorChanged = document.getElementById("information-highlight");
    formationColorChanged = document.getElementById("formation-highlight");
    if (clicked) {
        formationDetail.style.display = "block";
        informationDetail.style.display = "none";
        informationColorChanged.style.color = "#EBE3D0";
        informationColorChanged.style.borderBottom = "solid 1vh #EBE3D0";
        formationColorChanged.style.color = "#FAACC4";
        formationColorChanged.style.borderBottom = "solid 1vh #FAACC4";
    } else {
        formationDetail.style.display = "none";
        informationDetail.style.display = "block";
        informationColorChanged.style.color = "#FAACC4";
        informationColorChanged.style.borderBottom = "solid 1vh #FAACC4";
        formationColorChanged.style.color = "#EBE3D0";
        formationColorChanged.style.borderBottom = "solid 1vh #EBE3D0";
    };
}

function menuMobile(evento) {
    clicked = evento.target;
    listMenuMobile = document.getElementById("list-menu-mobile");
    if (clicked) {
        if (listMenuMobile.style.display === 'block') {
            listMenuMobile.style.display = "none";    
        } else {
            listMenuMobile.style.display = "block";
            listMenuMobile.style.position = "absolute";
            listMenuMobile.style.top = "18%";
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