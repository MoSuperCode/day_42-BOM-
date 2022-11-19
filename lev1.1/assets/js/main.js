function timeOut() {
    setTimeout(() => {
        console.log("Erledigt. du hast 15 Sek deines Lebens verschwendet");
    }, 15000);
}

/////////////////////////////////////////
/////////////////////////////////////////
console.log("Start Warten für 15 Sek...");
timeOut();

let y = 10;
function interval1() {

    if (y > 0) {
        const date1 = new Date();
        console.log(date1);
        y--;
        ;
    } else if (y === 0) {
        clearInterval(setttInterval1);
    }
}
function setttInterval1() {
    setInterval("interval1()", 100);
}
setttInterval1();

/////////////////////////////////////////
/////////////////////////////////////////

let x = 10;
function interval() {
    if (x > 0) {
        console.log(x);
        x--;
    } else if (x === 0 && x >= 0) {
        console.log("Endlich geschafft");
        x--;
    }
    else {
        clearInterval(setttInterval);
    }


}
function setttInterval() {
    setInterval("interval()", 1000);
}
setttInterval();
