// let langs = document.querySelector(".langs");
let link = document.querySelectorAll(".langs a");

let homeNavButton = document.querySelector(".banner .homeNavButton");
let aboutMeNavButton = document.querySelector(".banner .aboutMeNavButton");
let gamesNavButton = document.querySelector(".banner .gamesNavButton");
let contactsNavButton = document.querySelector(".banner .contactsNavButton");
let homeSubTitle = document.querySelector(".homeDescriptionContainer h2");
let homeDescription = document.querySelector(".homeDescriptionContainer p");
let aboutSubTitle = document.querySelector(".aboutDescription h1");
let aboutDescription = document.querySelector(".aboutDescription p");
let aboutButtonText = document.querySelector(".aboutButton button");

link.forEach(el=>{
     el.addEventListener("click", () => {
        // langs.querySelector(".active").classList.remove("active");
        // el.classList.add("active");

        let attr = el.getAttribute("language")

        homeNavButton.textContent = data[attr].homeNavButton
        aboutMeNavButton.textContent = data[attr].aboutMeNavButton
        gamesNavButton.textContent = data[attr].gamesNavButton
        contactsNavButton.textContent = data[attr].contactsNavButton
        homeSubTitle.textContent = data[attr].homeSubTitle
        homeDescription.textContent = data[attr].homeDescription
        aboutSubTitle.textContent = data[attr].aboutSubTitle
        aboutDescription.textContent = data[attr].aboutDescription
        aboutButtonText.textContent = data[attr].aboutButtonText
     })
})

let data = {
     english: 
     {
        homeNavButton: "Home",
        aboutMeNavButton: "About me",
        gamesNavButton: "Games",
        contactsNavButton: "Contacts",
        homeSubTitle: "Game Developer",
        homeDescription: "I'm a 21-year-old programmer, passionate about technology, a big coffee lover and lover of souls-like games.",
        aboutSubTitle: "About me",
        aboutDescription: "I have been working professionally as a game developer for over two years using the Unity and C# graphics engine. I am currently working with a team of Brazilian developers on the game Rogue Masters, acting as a networking programmer.",
        aboutButtonText: "About me"
     },
     portuguese: 
     {
        homeNavButton: "Início",
        aboutMeNavButton: "Sobre mim",
        gamesNavButton: "Games",
        contactsNavButton: "Contacts",
        homeSubTitle: "Game Developer",
        homeDescription: "Eu sou um programador de 21 anos de idade, apaixonado por tecnologia, um grande amante de café e apreciador de jogos souls-like.",
        aboutSubTitle: "Sobre mim",
        aboutDescription: "Eu trabalho profissionalmente como desenvolvedor de jogos a mais de dois anos usando o motor gráfico Unity e C#. Atualmente estou trabalhando com um time de desenvolvedores brasileiros no jogo Rogue Masters, atuando como programador de networking.",
        aboutButtonText: "Sobre mim"
     }
}

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