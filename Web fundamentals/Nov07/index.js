var deadline = new Date("oct 31, 2021 15:37:25").getTime();

var time_interval = setInterval(function() {

    var now = new Date().getTime();
    var future_time = deadline - now;
    var days = Math.floor(future_time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((future_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((future_time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((future_time % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    if (future_time < 0) {
        clearInterval(time_interval);
        document.getElementById("over").innerHTML = 'TIMES UP!!!';
        document.getElementById("day").innerHTML = '00';
        document.getElementById("hour").innerHTML = '00';
        document.getElementById("min").innerHTML = '00';
        document.getElementById("sec").innerHTML = '00';
    }
}, 1000);