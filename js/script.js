function toggleElements(){
    var homeElement = document.getElementById("homeDescription");

    if (homeElement.getAttribute("hidden")){
        hideAboutElement();
        return;
    }

    hideHomeElement();
}

function hideAboutElement(){
    var homeElement = document.getElementById("homeDescription");
    var aboutElement = document.getElementById("aboutDescription");

    homeElement.removeAttribute("hidden");
    aboutElement.setAttribute("hidden", "hidden");
}

function hideHomeElement(){
    var aboutElement = document.getElementById("aboutDescription");
    var homeElement = document.getElementById("homeDescription");

    aboutElement.removeAttribute("hidden");
    homeElement.setAttribute("hidden", "hidden");
}