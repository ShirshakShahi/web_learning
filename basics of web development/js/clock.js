


function showTime() {
    let hour = document.getElementsByClassName("hr");
    let min = document.getElementsByClassName("min");
    let sec = document.getElementsByClassName("sec");
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    hour[0].innerHTML = `${h} hours`;
    min[0].innerHTML = `${m} minutes`;
    sec[0].innerHTML = `${s} seconds`;
    setTimeout(showTime, 1000)
}
showTime();