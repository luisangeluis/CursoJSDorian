const myVideo = document.querySelector('#my-video');

addEventListener('visibilitychange',(e)=>{
    console.log(document.visibilityState);
    if(document.visibilityState==='visible'){
        myVideo.play();
    
    }else if(document.visibilityState==="hidden"){
        myVideo.pause();
    }
});