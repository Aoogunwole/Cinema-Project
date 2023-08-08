const myVideo = document.getElementById("myVideo")

const playbtn = document.getElementById("play");
const pausebtn = document.getElementById("pause");
const mutebtn = document.getElementById("mute");
const unmutebtn = document.getElementById("unmute");

function playIt() {
    myVideo.play();
    playbtn.style.display = "none";  
    pausebtn.style.display = "block";
}
function pauseIt() {
    myVideo.pause();
    pausebtn.style.display = "none"
    playbtn.style.display = "block";
}
function muteIt() {
    myVideo.muted = true;
    mutebtn.style.display = "none";
    unmutebtn.style.display = "block";
}
function unmuteIt() {
    myVideo.muted = false;
    unmutebtn.style.display = "none";
    mutebtn.style.display = "block";

    
}



const nav__menu = document.getElementById("nav-menu");
const openMenuBar = document.getElementById("open");
const closeMenuBar = document.querySelector(".close-bar");

function openIt() {
    nav__menu.style.display = "block";
    openMenuBar.style.display = "none";
    closeMenuBar.style.display = "block";
    
}
function closeIt() {
    nav__menu.style.display = "none";
    openMenuBar.style.display = "block";
    closeMenuBar.style.display = "none";
    
}














