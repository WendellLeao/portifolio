let languages = document.querySelector(".languages");
let link = document.querySelectorAll(".languages a");
let attr = document.querySelector(".languages .active").getAttribute("language");

let homeNavButton = document.querySelector(".banner .homeNavButton");
let aboutMeNavButton = document.querySelector(".banner .aboutMeNavButton");
let gamesNavButton = document.querySelector(".banner .gamesNavButton");
let contactsNavButton = document.querySelector(".banner .contactsNavButton");
let homeSubTitle = document.querySelector(".homeDescriptionContainer h2");
let homeDescription = document.querySelector(".homeDescriptionContainer p");
let aboutSubTitle = document.querySelector(".aboutDescription h1");
let aboutDescription = document.querySelector(".aboutDescription p");
let aboutButtonText = document.querySelector(".aboutButton button");
let rogueSynopsis = document.querySelector(".rogue em p");
let rogueDescription = document.querySelector(".rogue .gameDescriptionText");
let horrorSynopis = document.querySelector(".horror em p");
let horrorDescription = document.querySelector(".horror .gameDescriptionText");
let origensSynopsis = document.querySelector(".origens em p");
let origensDescription = document.querySelector(".origens .gameDescriptionText");
let arrowSynopsis = document.querySelector(".arrow em p");
let arrowDescription = document.querySelector(".arrow .gameDescriptionText");
let overthrowSynopsis = document.querySelector(".overthrow em p");
let overthrowDescription = document.querySelector(".overthrow .gameDescriptionText");
let claudioSynopsis = document.querySelector(".claudio em p");
let claudioDescription = document.querySelector(".claudio .gameDescriptionText");
let fruitsSynopsis = document.querySelector(".fruits em p");
let fruitsDescription = document.querySelector(".fruits .gameDescriptionText");
let jumpSynopsis = document.querySelector(".jump em p");
let jumpDescription = document.querySelector(".jump .gameDescriptionText");
let goHomeButtonText = document.querySelector(".footerHomeButton button");
let developmentGameButton = document.querySelector(".gamesItemButton button");

link.forEach(el => {
     el.addEventListener("click", () => {
        languages.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        attr = el.getAttribute("language");

        homeNavButton.textContent = data[attr].homeNavButton;
        aboutMeNavButton.textContent = data[attr].aboutMeNavButton;
        gamesNavButton.textContent = data[attr].gamesNavButton;
        contactsNavButton.textContent = data[attr].contactsNavButton;
        homeSubTitle.textContent = data[attr].homeSubTitle;
        homeDescription.textContent = data[attr].homeDescription;
        aboutSubTitle.textContent = data[attr].aboutSubTitle;
        aboutDescription.textContent = data[attr].aboutDescription;
        aboutButtonText.textContent = data[attr].aboutButtonText;
        rogueSynopsis.textContent = data[attr].rogueSynopsis;
        rogueDescription.textContent = data[attr].rogueDescription;
        horrorSynopis.textContent = data[attr].horrorSynopis;
        horrorDescription.textContent = data[attr].horrorDescription;
        origensSynopsis.textContent = data[attr].origensSynopsis;
        origensDescription.textContent = data[attr].origensDescription;
        arrowSynopsis.textContent = data[attr].arrowSynopsis;
        arrowDescription.textContent = data[attr].arrowDescription;
        overthrowSynopsis.textContent = data[attr].overthrowSynopsis;
        overthrowDescription.textContent = data[attr].overthrowDescription;
        claudioSynopsis.textContent = data[attr].claudioSynopsis;
        claudioDescription.textContent = data[attr].claudioDescription;
        fruitsSynopsis.textContent = data[attr].fruitsSynopsis;
        fruitsDescription.textContent = data[attr].fruitsDescription;
        jumpSynopsis.textContent = data[attr].jumpSynopsis;
        jumpDescription.textContent = data[attr].jumpDescription;
        goHomeButtonText.textContent = data[attr].goHomeButtonText;
        developmentGameButton.textContent = data[attr].developmentGameButton;
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
        aboutButtonText: "About me",
        backButtonText: "Back",
        rogueSynopsis: "\"Rogue Masters is a cooperative game of up to 6 players with souls-like style combat.\"",
        rogueDescription: "That's the project I'm currently working on. I work mainly in the networking part, I am responsible for the synchronization of the gameplay mechanics and for the development and optimization in the infrastructure of the project code.",
        horrorSynopis: "\"Where Are You is a cooperative horror game with support of up to 4 players. Your goal is to investigate haunted houses and exorcise the ghost that haunts them.\"",
        horrorDescription: "I'm developing this project myself and plan to release it on Steam one day. I take care of all the programming and game design on my own. I use ready-made assets to compose the graphical part of the game.",
        origensSynopsis: "\"Origens is a 2D platform game where the main character takes a journey in a newly created world that evolves geologically through the ages.\"",
        origensDescription: "This project was the Final Paper of my graduation of Technologist in Digital Games. I worked in it as a programmer, artist, screenwriter and game designer.",
        arrowSynopsis: "\"You're in a cemetery and have to shoot arrows at hordes of skeletons to survive as long as possible.\"",
        arrowDescription: "This project was a programming test. The goal was to develop a project with as much technical quality as possible to assess how much I learned during my bootcamping period. I just took care of the programming part.",
        overthrowSynopsis:"\"In a dream-themed game, you have to knock down the obstacles in your way to get to the end.\"",
        overthrowDescription: "I developed this game during my bootcamp period. I had the help of senior programmers who accompanied me and taught me a lot about programming. I did the whole game myself.",
        claudioSynopsis: "\"Shoot enemies to advance and face the big boss in this cartoon-style 2D platformer.\"",
        claudioDescription: "A simple personal project I did during the holidays to practice programming. I took care of everything except the art that was obtained from a free asset store.",
        fruitsSynopsis: "\"Face the enemies and collect all the fruits to advance to the next level in this beautiful 2D platformer.\"",
        fruitsDescription: "Another personal project that I developed to practice. My main goal with this project was to develop a simple game with fun and fluid mechanics. The art was purchased in a free asset store.",
        jumpSynopsis: "\"Jump the obstacles and beat the platform challenges to advance to the next stage.\"",
        jumpDescription: "This project is a remake of the first game I've ever developed. The goal was to compare how much I evolved as a programmer in a one-year period of studies. I did the whole game myself.",
        goHomeButtonText: "Home" ,
        developmentGameButton: "In development!",
     },
     portuguese: 
     {
        homeNavButton: "Início",
        aboutMeNavButton: "Sobre mim",
        gamesNavButton: "Jogos",
        contactsNavButton: "Contatos",
        homeSubTitle: "Game Developer",
        homeDescription: "Eu sou um programador de 21 anos de idade, apaixonado por tecnologia, um grande amante de café e apreciador de jogos souls-like.",
        aboutSubTitle: "Sobre mim",
        aboutDescription: "Eu trabalho profissionalmente como desenvolvedor de jogos a mais de dois anos usando o motor gráfico Unity e C#. Atualmente estou trabalhando com um time de desenvolvedores brasileiros no jogo Rogue Masters, atuando como programador de networking.",
        aboutButtonText: "Sobre mim",
        backButtonText: "Voltar",
        rogueSynopsis: "\"Rogue Masters é um jogo cooperativo de até 6 jogadores com combate estilo souls-like.\"",
        rogueDescription: "Esse é o projeto que estou trabalhando atualmente. Eu atuo principalmente na parte de networking, sou responsável pela sincronização das mecânicas de gameplay e pelo desenvolvimento e otimização na infraestrutura do código do projeto.",
        horrorSynopis: "\"Where Are You é um jogo de terror cooperativo com suporte de até 4 jogadores. Seu objetivo é investigar casas mal assombradas e exorcizar o fantasma que a assombra.\"",
        horrorDescription: "Estou desenvolvendo esse projeto sozinho e pretendo lança-lo na Steam um dia. Cuido de toda a programação e game design por conta própria. Utilizo assets prontos para compor a parte gráfica do jogo.",
        origensSynopsis: "\"Origens é um jogo de plataforma 2D onde o personagem principal faz uma jornada em um mundo recém criado que evolui geologicamente através das eras.\"",
        origensDescription: "Esse projeto foi o TCC da minha graduação de Tecnólogo em Jogos Digitais. Atuei nele como programador, artista, roteirista e game designer.",
        arrowSynopsis: "\"Você está em um cemitério e tem que atirar flechas em hordas de esqueletos para sobreviver o máximo de tempo possível.\"",
        arrowDescription: "Esse projeto foi um teste de programação. O objetivo era desenvolver um projeto com o máximo de qualidade técnica possível para avaliar o quanto eu aprendi durante meu período de bootcamping. Cuidei apenas da parte de programação.",
        overthrowSynopsis:"\"Em um jogo com temática de sonho, você tem que derrubar os obstáculos no seu caminho para chegar no final.\"",
        overthrowDescription: "Eu desenvolvi esse jogo durante o meu período de bootcamp. Eu tive a ajuda de programadores seniors que me acompanharam e me ensinaram muito sobre programação. Fiz todo o jogo sozinho.",
        claudioSynopsis: "\"Atire nos inimigos para avançar e enfrentar o grande chefão nesse jogo de plataforma 2D estilo cartoon.\"",
        claudioDescription: "Um simples projeto pessoal que fiz durante as férias para praticar programação. Cuidei de tudo exceto da arte que foi obtida em uma loja de assets gratuitos.",
        fruitsSynopsis: "\"Enfrente os inimigos e colete todas as frutas para avançar para a próxima fase nesse lindo jogo de plataforma 2D.\"",
        fruitsDescription: "Mais um projeto pessoal que desenvolvi para praticar. Meu principal objetivo com este projeto foi desenvolver um jogo simples com mecânica divertida e fluida. A arte foi comprada em uma loja de assets gratuitos.",
        jumpSynopsis: "\"Pule os obstáculos e vença os desafios de plataforma para avançar para a próxima fase.\"",
        jumpDescription: "Esse projeto é um remake do primeiro jogo que eu já desenvolvi. O objetivo foi comparar o quanto eu evolui como programador em um período de um ano de estudos. Fiz o jogo inteiro sozinho.",
        goHomeButtonText: "Início",
        developmentGameButton: "Em desenvolvimento!",
     }
}

function toggleElements(){
    let homeElement = document.getElementById("homeDescription");
    let homeElementIsHidden = homeElement.getAttribute("hidden");

    if (homeElementIsHidden){
        hideAboutElement();
        return;
    }

    hideHomeElement();
}

function hideAboutElement(){
    let homeElement = document.getElementById("homeDescription");
    let aboutElement = document.getElementById("aboutDescription");

    homeElement.removeAttribute("hidden");
    aboutElement.setAttribute("hidden", "hidden");

    slideProfilePicture("slideLeft");

    setAboutButtonText(false);
}

function hideHomeElement(){
    let aboutElement = document.getElementById("aboutDescription");
    let homeElement = document.getElementById("homeDescription");
    
    aboutElement.removeAttribute("hidden");
    homeElement.setAttribute("hidden", "hidden");
    
    slideProfilePicture("slideRight");

    setAboutButtonText(true);
}

function slideProfilePicture(side){
    let profileContainer = document.getElementById('profileContainer');

    profileContainer.style.animation= side += " 0.2s linear";
}

function setAboutButtonText(homeElementIsHidden){
    if(homeElementIsHidden == true){
        aboutButtonText.textContent = data[attr].backButtonText;
    }
    else{
        aboutButtonText.textContent = data[attr].aboutButtonText;
    }
}