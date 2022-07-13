function alerta(){
    alert("You are searching for " + document.querySelector("#search").value);

}
var element = document.getElementById("joinBtn")
function remov(){
    element.parentNode.removeChild(element)

}

// ---- FIRST BOX LIKES----
var likes = 68;
var addlikes = document.querySelector(".likebtn");

function addlike1(){
    likes++;
    addlikes.innerText = likes;
}

// ---- SECOND BOX LIKES----
var likes2 = 212;
var addlikes2 = document.querySelector(".likebtn2");

function addlike2(){
    likes2++;
    addlikes2.innerText = likes2;
}


// ---- THIRD BOX LIKES----

var likes3 = 32;
var addlikes3 = document.querySelector(".likebtn3");

function addlike3(){
    likes3++;
    addlikes3.innerText = likes3;
}