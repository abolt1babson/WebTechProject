let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let body = document.querySelector("body");
let headerLinks = document.querySelectorAll(".header a");
let footerLinks = document.querySelectorAll(".footer a");
let workLinks = document.querySelectorAll(".top-workouts a");
let suppLinks = document.querySelectorAll(".top-supps a");

function light(){
    header.style.backgroundColor = "#1b1e22";
    footer.style.backgroundColor = "#1b1e22";
    body.style.backgroundColor = "#e8eaed";
    for (n=0; n<headerLinks.length; n++){
        headerLinks[n].style.color = "#c6cbd2";
    }
    for (n=0; n<footerLinks.length; n++){
        footerLinks[n].style.color = "#c6cbd2";
    }
    for (n=0; n<workLinks.length; n++){
        workLinks[n].style.color = "#1b1e22";
    }
    for (n=0; n<suppLinks.length; n++){
        suppLinks[n].style.color = "#1b1e22";
    }
    document.querySelector("#lightbtn").style.display = "none";
    document.querySelector("#darkbtn").style.display = "inline";
    document.querySelector("p").style.color = "#1b1e22";
    document.querySelectorAll(".title")[0].style.color = "#1b1e22";
    document.querySelectorAll(".bench a")[0].style.color = "#1b1e22";
    document.querySelectorAll(".squat a")[0].style.color = "#1b1e22";
}

document.querySelector("#lightbtn").addEventListener("click", ()=>{
    light();
})

function dark(){
    header.style.backgroundColor = "#c6cbd2";
    footer.style.backgroundColor = "#c6cbd2";
    body.style.backgroundColor = "#1b1e22";
    for (n=0; n<headerLinks.length; n++){
        headerLinks[n].style.color = "#1b1e22";
    }
    for (n=0; n<footerLinks.length; n++){
        footerLinks[n].style.color = "#1b1e22";
    }
    for (n=0; n<workLinks.length; n++){
        workLinks[n].style.color = "#c6cbd2";
    }
    for (n=0; n<suppLinks.length; n++){
        suppLinks[n].style.color = "#c6cbd2";
    }
    document.querySelector("#darkbtn").style.display = "none";
    document.querySelector("#lightbtn").style.display = "inline";
    document.querySelector("p").style.color = "#c6cbd2";
    document.querySelectorAll(".title")[0].style.color = "#c6cbd2";
    document.querySelectorAll(".bench a")[0].style.color = "#c6cbd2";
    document.querySelectorAll(".squat a")[0].style.color = "#c6cbd2";
}

document.querySelector("#darkbtn").addEventListener("click", ()=>{
    dark();
})