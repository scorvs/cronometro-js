let start = document.querySelector('.btn-start').addEventListener('click', startWatch);
let stop = document.querySelector('.btn-stop').addEventListener('click', stopWatch);
let reset = document.querySelector('.btn-reset').addEventListener('click', resetWatch);

let resutado = document.querySelector('.hora');



let hour = 0;
let minute = 0;
let second = 0;

let running;
let exec = false;
let tempo = 1000;

function startWatch(){
   
   running = setInterval(()=>{timer();}, tempo);

}
   

function stopWatch(){
    exec = false;
    clearInterval(running);
    
   
}
function resetWatch(){
    exec= false;
    clearInterval(running);
    hour = 0;
    minute = 0;
    second = 0;
    document.querySelector('.hora').innerHTML = '';
}

function timer(){
    exec = true;
    if(exec){
    second++;
    if(second==60){
        second=0;
        minute++
    }
    if(minute==60){
        minute=0;
        hour++
    }
    var format = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    document.querySelector('.hora').innerHTML = format;
}

}

