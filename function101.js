// let num ="Mark";
// console.log(num);
// document.getElementById("hContent").innerHTML=num;
let grade = prompt("Please enter your mark: ");
if(mark>=80 && mark<=100)
{
console.log("grade A");
alert(mark + "= grade A");
document.getElementById("hContent").innerHTML="grade A";
}
else if(mark>=70 && mark<80)
{
console.log("grade B");
alert(mark + "= grade B");
document.getElementById("hContent").innerHTML="grade B";
}
else if(mark>=60 && mark<70)
{
console.log("grade C");
alert(mark + "= grade C");
document.getElementById("hContent").innerHTML="grade C";
}
else if(mark>=50 && mark<60)
{
console.log("grade D");
alert(mark + "= grade D");
document.getElementById("hContent").innerHTML="grade D";
}
else if(mark>=0 && mark<50)
{
console.log("grade F");
alert(mark + "= grade F");
document.getElementById("hContent").innerHTML="grade F";
}
else("END");
{
console.log("ERROR");
alert(mark + "= ERROR");
document.getElementById("hContent2").innerHTML="ERROR";
}
