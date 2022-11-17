
function gstCalc(){
 
   var productPrice=parseInt(document.getElementById("productPrice").value);
   var pr=document.getElementById("rate").value;
var productState=document.getElementById("productState").value;

if(productState==0){
var sgstPer=pr/2;
var cgstPer=pr/2;
var cgstAmt=productPrice*cgstPer/100;
var sgstAmt=productPrice*sgstPer/100;
var pay=productPrice+cgstAmt+sgstAmt;
document.getElementById("totalAmt").innerHTML="Rs"+Math.round(pay);
document.getElementById("sgst").innerHTML="Rs"+sgstAmt;
document.getElementById("cgst").innerHTML="Rs"+cgstAmt;

}
else{
   var sgstPer=pr;
   var sgstAmt=productPrice*sgstPer/100;
var pay=productPrice+(productPrice*sgstPer/100);
document.getElementById("totalAmt").innerHTML="Rs"+pay;
document.getElementById("sgst").innerHTML="Rs"+sgstAmt;
document.getElementById("cgst").innerHTML=0     ;

}
}