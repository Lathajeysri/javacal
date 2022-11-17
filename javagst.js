
function gstCalc(){
 
   var pp=parseInt(document.getElementById("pp").value);
   var pr=document.getElementById("rate").value;
var ps=document.getElementById("ps").value;

if(ps==0){
var sgstPer=pr/2;
var cgstPer=pr/2;
var cgstAmt=pp*cgstPer/100;
var sgstAmt=pp*sgstPer/100;
var pay=pp+(pp*sgstPer/100)+(pp*cgstPer/100);
document.getElementById("totalAmt").innerHTML="Rs"+pay;
document.getElementById("sgst").innerHTML="Rs"+sgstAmt;
document.getElementById("cgst").innerHTML="Rs"+cgstAmt;

}
else{
   var sgstPer=pr;
   var sgstAmt=pp*sgstPer/100;
var pay=pp+(pp*sgstPer/100);
document.getElementById("totalAmt").innerHTML="Rs"+pay;
document.getElementById("sgst").innerHTML="Rs"+sgstAmt;
document.getElementById("cgst").innerHTML=0     ;

}
}