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

    var aboutButton = document.getElementById("aboutButton");
    aboutButton.innerText = "+ Sobre mim"
}

function hideHomeElement(){
    var aboutElement = document.getElementById("aboutDescription");
    var homeElement = document.getElementById("homeDescription");
    
    aboutElement.removeAttribute("hidden");
    homeElement.setAttribute("hidden", "hidden");
    
    var aboutButton = document.getElementById("aboutButton");
    aboutButton.innerText = "Voltar"
}