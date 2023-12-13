let timeText = document.querySelector('h1');
let main = document.querySelector('main');
let change = true;
// Color Effect -->
main.addEventListener('click', function(){
    
    if(change){
        main.style.backgroundColor = '#fff';
        timeText.style.color = '#000';
        change = false;
    }
    else{
        main.style.backgroundColor = '#000';
        timeText.style.color = '#fff';
        change = true;
    }
    timeText.disabled();
   
});

//Time Function -->
setInterval(()=>{
    let timeObj = new Date();
    let time = timeObj.toLocaleTimeString()
   timeText.innerText = time;
},1000);

