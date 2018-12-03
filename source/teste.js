var plano = parseInt(document.getElementById("plano").value);
var text = "";

function msg () {
    if (plano == 1200) {
        text += plano;
        document.getElementById("resultado").innerHTML = "Plano faleMais30 adquirido, minutos contratados: " + text;
    }
}

var text = new Number ();
var text = text;

function call() {
    if ((text -1) >= 0) {
        text = text -1;
        minutos.innerText = text;
        setTimeout('call()', 1000);
    }
}