let myDiv = document.getElementById('my-div');

function isTouchDevice(){
    try{
        document.createEvent('TouchEvent');
        return true;
    }
    catch(e){
        return false
    }
}

const move = (e) =>{
    try{
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    }catch(e){}
       myDiv.style.left = x - 10 + "px";
       myDiv.style.top = y - 50 + "px";
}

//for mouse

document.addEventListener('mousemove',(e)=>{
    move(e);
})

document.addEventListener('touchmove',(e)=>{
    move(e);
})