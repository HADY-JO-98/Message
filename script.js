var get = document.getElementById("ss")
var msg = document.getElementById("msg")
var btn = document.getElementById("comm")
var msgp = document.getElementById("X")
var ppp = document.getElementById("ppp")

btn.onclick = function (){
    var inputvalue = msg.value;
    msgp.innerHTML = inputvalue;
    get.style = "margin-top:10%;"
    ppp.style = "display:flex;"
    msgp.style = "display:flex;"
    msg.value=""
}