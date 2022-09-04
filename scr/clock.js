const Clock = document.querySelector("#clock");

function ClockTime(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    Clock.innerText = `${hour}시 ${minute}분 ${second}초 입니다.`
}

ClockTime();
setInterval(ClockTime, 1000);