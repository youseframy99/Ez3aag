console.log("OSTOR YA RAB");
let Repeater = document.getElementById("Repeater");
let result = document.getElementById("result");
let button = document.getElementById("button");
let zin = document.getElementById("amk");
let message = document.getElementById("message");
let resala = document.getElementById("resala");
button.addEventListener("click" , function(){
    let casio = Repeater.value
    for(let i = 0; i < casio; i++){
       result.textContent += message.value + "    ";
    } 
});
zin.addEventListener("click" , function(){
    resala.textContent=" اكيد عمك يبقى  يوسف رامي اللي عمل الموقع ده 😎👑";
});