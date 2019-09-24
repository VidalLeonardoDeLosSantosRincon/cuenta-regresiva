let value;
value = parseInt(prompt("Ingresa el valor en segundos"));

if(value){
    let status;
    let minutes
    let seconds;
    if(value<60){
        let interval = setInterval(()=>{
            if(value<10){
                status = `00:0${value}`;
            }else{
                status = `00:${value}`;
            }        
            document.getElementsByClassName("ctr")[0].innerHTML = status;
            value--;
            if(value==0){
                status = `00:0${value}`;
                document.getElementsByClassName("ctr")[0].innerHTML = status;
                try{
                    clearInterval(interval);
                }catch(error){
                    alert(error);
                }
            }
        },1000);  
    }else{  
        value/=60;
        minutes = Math.floor(value);
        seconds = Math.round((value - minutes)*60);
        
        let interval = setInterval(()=>{
            if(minutes>=10){
                if(seconds>=10){
                    status = `${minutes}:${seconds}`;
                }else{
                    status = `${minutes}:0${seconds}`;
                }
            }else{
                if(seconds>=10){
                    status = `0${minutes}:${seconds}`;
                }else{
                    status = `0${minutes}:0${seconds}`;
                } 
            }
            document.getElementsByClassName("ctr")[0].innerHTML = status;  
           if(seconds!==0){
               seconds--;
           }
            if(seconds===0 && minutes>0){
                minutes--;
                seconds=59;
            }else if(seconds===0 && !minutes>0){
                seconds=59;
                setTimeout(()=>{
                    seconds=0;
                    status = `0${minutes}:0${seconds}`;
                    document.getElementsByClassName("ctr")[0].innerHTML = status;  
                    clearInterval(interval);
                },1000/60);
            }
        },1000); 
    }
}
