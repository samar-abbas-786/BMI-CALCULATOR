function cal() {
    const W = document.getElementById("Weight").value;
    const H = document.getElementById("Height").value;
    const bmi = (W /(H*H));
    document.getElementById("ans").value = bmi;

    if(bmi<18.5){
        document.getElementById("stat").value="UNDERWEIGHT";

    }

    else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById("stat").value="HEALTHY";
    }
    
    else if(bmi>=25 && bmi<=29.9){
        document.getElementById("stat").value="OVERWEIGHT";

    }
    else if(bmi>=30 && bmi<=39.9){
        document.getElementById("stat").value="OBESITY";

    }
    else if(bmi>=40){
        document.getElementById("stat").value="MORBID OBESITY";

    }
}

function reset(){
    document.getElementById("Weight").value="";
    document.getElementById("Height").value="";
    document.getElementById("ans").value=" ";
    document.getElementById("stat").value=" ";

}
// function convert(){
//   const a=document.getElementById("feet").value;
//   document.getElementById("metre").value=a*0.3048;

// } 





