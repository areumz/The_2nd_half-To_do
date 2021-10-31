const dday = document.querySelector("#xmasdday span:first-child");
const hms = document.querySelector("#xmasdday span:last-child");

function ddayCounter() {
    const xmas = new Date("2021-12-25T00:00:00+0900");
    const now = new Date();
    const distance = xmas.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    dday.innerText = `D-${day}`;
};

ddayCounter();
setInterval(ddayCounter, 1000);

function hmsCounter() {
    const xmas = new Date("2021-12-25T00:00:00+0900");
    const now = new Date();
    const distance = xmas.getTime() - now.getTime();
    const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
    const minutes = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2, "0");
    const secounds = String(Math.floor((distance % (1000*60))/1000)).padStart(2, "0");
    hms.innerText = `${hours}:${minutes}:${secounds}`
};

hmsCounter();
setInterval(hmsCounter, 1000);

