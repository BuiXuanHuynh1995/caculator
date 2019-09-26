function cong() {
    let arg1 = +document.getElementById("numBer1").value;
    let arg2 = +document.getElementById("numBer2").value;
    let calculateResult = arg1 + arg2;
    document.getElementById("ketQua").value= calculateResult
}
function tru() {
    let arg1 = document.getElementById("numBer1").value;
    let arg2 = document.getElementById("numBer2").value;
    let calculateResult = arg1 - arg2;
    document.getElementById("ketQua").value= calculateResult
}
function nhan() {
    let arg1 = +document.getElementById("numBer1").value;
    let arg2 = +document.getElementById("numBer2").value;
    let calculateResult = arg1 * arg2;
    document.getElementById("ketQua").value= calculateResult
}
function chia() {
    let arg1 = +document.getElementById("numBer1").value;
    let arg2 = +document.getElementById("numBer2").value;
    let calculateResult = arg1/arg2;
    document.getElementById("ketQua").value= calculateResult
}
function bt(value) {
    document.getElementById("input").value += value;
}
function bang(value) {
    document.getElementById("input").value =eval(document.getElementById("input").value);
}
function xoa(value) {
    document.getElementById("input").value = "";
}