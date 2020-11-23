
function plus(){
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}
function minus(){
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    result = num1 - num2;
    document.getElementById("result").innerHTML = result;
}
function multiplication(){
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    result = num1 * num2;
    document.getElementById("result").innerHTML = result;
}
function division(){
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    result = num1 / num2;
    document.getElementById("result").innerHTML = result;
}
    
