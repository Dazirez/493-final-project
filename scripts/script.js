var character = document.getElementById("character");
function jump() {
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

$(document).ready(function() { 
    console.log("ready!");
    player = $(".character");
    

})