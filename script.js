// Fetch the component and insert it into the placeholder div
fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav').innerHTML = data;
    });
const bodyTag = document.getElementsByTagName('body');

const DayNight = document.getElementsByClassName("time");
if (time:clicked):

function day() {
    var color="black"
    background(color)
}
function background(color){
    bodyTag.style.backgroundColor = color
}

DayNight.addEventListerner("click",background("black"));