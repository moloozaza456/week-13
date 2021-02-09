let gen = prompt("Please enter value of generation:");
if(gen>=2540 && gen<=2564)
{
if(gen>=2553 && gen<=2564){
    alert(gen + " = Gen Alpha");
    console.log(gen + " = Gen Alpha");
    document.getElementById("hContent").innerHTML= gen + " = Gen Alpha ";
}
else if(gen>=2540 && gen<=2553){
    alert(gen + " = Gen Z");
    console.log(gen + " = Gen Z");
    document.getElementById("hContent").innerHTML= gen + " = Gen Z";
    }
else if(gen>=2523 && gen<=2540){
    alert(gen + " = Gen Y");
    console.log(gen + " = Gen Y");
    document.getElementById("hContent").innerHTML= gen + " = Gen Y";
    }
else if(gen>=2508 && gen<=2522){
    alert(gen + " = Gen X");
    console.log(gen + " = Gen X");
    document.getElementById("hContent").innerHTML= gen + " = Gen X";
     }
else if(gen>=2489 && gen<=2507){
    alert(gen + " = Gen Baby Boomer");
    console.log(gen + " = Gen Baby Boomer");
    document.getElementById("hContent").innerHTML= gen + " = Gen Baby Boomer";
    }
else if(gen>=2468 && gen<=2488){
    alert(gen + " = Gen Silent Generation");
    console.log(gen + " = Gen Silent Generation");
    document.getElementById("hContent").innerHTML= gen + " = Gen Silent Generation";
    }
else if(gen>=2444 && gen<=2467){
    alert(gen + " = Gen reatest Generation");
    console.log(gen + " = Gen reatest Generation");
    document.getElementById("hContent").innerHTML= gen + " = Gen reatest Generation";
    }
}
else{
alert(gen + " = ERROR");
console.log("ERROR");
}