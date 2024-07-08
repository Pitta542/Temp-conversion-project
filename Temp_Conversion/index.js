const textbox = document.getElementById("textBox");
const ToFahrenheit = document.getElementById("ToFahrenheit");
const ToCelsius = document.getElementById("ToCelsius");
const result = document.getElementById("result");
let temp;

function Convert(){
    
    temp = Number(document.getElementById("textBox").value);

    if(ToFahrenheit.checked){
        temp = Math.round((9/5 * temp) +32);
        result.textContent = `${temp}°F`
    }
    else if(ToCelsius.checked){
        temp = Math.round((temp - 32) / (9/5));
        result.textContent = `${temp}°C`
    }
    else{
        result.textContent = "Select a Unit";
    }
}