document.getElementById('out').innerHTML = 0;

function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);
    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
    num1 = document.getElementById('n1').value = null;
    num1 = document.getElementById('n2').value = null;
}
function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
    num1 = document.getElementById('n1').value = null;
    num1 = document.getElementById('n2').value = null;
}
function ce() {
    num1 = document.getElementById('n1').value = null;
    num1 = document.getElementById('n2').value = null;
    document.getElementById('out').innerHTML = 0;
}
function multi() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
    num1 = document.getElementById('n1').value = null;
    num1 = document.getElementById('n2').value = null;
}
function division() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);
    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
    num1 = document.getElementById('n1').value = null;
    num1 = document.getElementById('n2').value = null;
}
