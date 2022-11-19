let divCount = document.getElementById("count");
let divContainer = document.querySelector(".message");
let i = 10;

document.body.setAttribute("onload", "startInterval()");
function startInterval() {
    setInterval("count()", 1000);
}

function count() {

    if (i >= 0) {
        divCount.innerText = i;
        console.log(i--);
    } if (i === 0) {
        clearInterval(startInterval());
        console.log("#lachs");
        divContainer.classList.add("hidden");
    }
};