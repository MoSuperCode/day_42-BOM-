let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
let date1;


setInterval(function () {
    date1 = new Date();
}, 500);




const div = document.createElement("div");
document.body.appendChild(div);
const p = document.createElement("p");
div.appendChild(p);

(function startTime() {

    setTimeout(function () {
        p.innerText = date1.toLocaleTimeString("en-US");
        startTime();
    }, 500); //500 = 500ms = 1s
}());

console.log(date1);

console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(wochenTag[date1.getDay()]);
console.log(monate[date1.getMonth()]);





