const btn = document.querySelector("#btn");
let percentage = 100;
let div = document.querySelector(".zeit");

function startInterval() {
    setInterval("decrease()", 80);
}


function decrease() {
    if (percentage > 0) {
        percentage--;
        div.innerText = `${percentage}%`;

    } else if (percentage === 0)
        clearInterval(startInterval());
}

btn.addEventListener("click", startInterval);






