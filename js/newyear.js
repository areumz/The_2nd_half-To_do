const d_day = document.querySelector("#newyeardday span:first-child");
const h_ms = document.querySelector("#newyeardday span:last-child");

function dday_Counter() {
    const newyear = new Date("2022-01-01T00:00:00+0900");
    const n_ow = new Date();
    const distance = newyear.getTime() - n_ow.getTime();
    const d_ay = Math.floor(distance / (1000 * 60 * 60 * 24));
    d_day.innerText = `D-${d_ay}`;
};

dday_Counter();
setInterval(dday_Counter, 1000);

function hms_Counter() {
    const newyear = new Date("2022-01-01T00:00:00+0900");
    const n_ow = new Date();
    const distance = newyear.getTime() - n_ow.getTime();
    const h_ours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
    const m_inutes = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2, "0");
    const s_ecounds = String(Math.floor((distance % (1000*60))/1000)).padStart(2, "0");
    h_ms.innerText = `${h_ours}:${m_inutes}:${s_ecounds}`
};

hms_Counter();
setInterval(hms_Counter, 1000);

