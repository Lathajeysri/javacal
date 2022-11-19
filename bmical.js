function calculateBMI(){
var height=parseInt(document.getElementById("height").value);//getting input from user
var weight=parseInt(document.getElementById("weight").value);


var heightCm=height/100;
var bmi=(weight/(heightCm*heightCm)).toFixed(2);
 
if (bmi<18.6){
    document.getElementById("result").innerHTML="underweight"; 
}
if (bmi>=18.6 && bmi<24.9){
    document.getElementById("result").innerHTML="Normalweight"; 
}
if(bmi>24.9){
    document.getElementById("result").innerHTML="overweight"; 
}
}