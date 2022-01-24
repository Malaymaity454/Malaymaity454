let screen=document.getElementById("screen");
buttons=document.querySelectorAll('button');
let screenValue='';
for(items of buttons)  {
    items.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText =='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value =screenValue;
        }
        else if (buttonText=='c'){
            screen.value ="";
        }
        else if(buttonText =="="){
            screen.value=eval(screenValue);
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }
    })
}
