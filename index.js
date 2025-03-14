const textBox = document.getElementById("temperature");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const submit = document.getElementById("submit")
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = (1.8 * temp) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) *1.8;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else result.textContent = "Select a unit";
}

submit.onclick = convert;