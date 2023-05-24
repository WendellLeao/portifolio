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

    setAboutButtonText("+ Sobre mim");

    slideProfilePicture("slideLeft");
}

function hideHomeElement(){
    var aboutElement = document.getElementById("aboutDescription");
    var homeElement = document.getElementById("homeDescription");
    
    aboutElement.removeAttribute("hidden");
    homeElement.setAttribute("hidden", "hidden");
    
    setAboutButtonText("Voltar");

    slideProfilePicture("slideRight");
}

function setAboutButtonText(text){
    var aboutButton = document.getElementById("aboutButton");
    
    aboutButton.innerText = text;
}

function slideProfilePicture(side){
    var profileContainer = document.getElementById('profileContainer');

    profileContainer.style.animation= side += " 0.2s linear";
}