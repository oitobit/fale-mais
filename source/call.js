function msg () {
    var plano = parseInt(document.getElementById("plano").value);
    var text = "";
    document.getElementById("demo").innerHTML = "Plano FaleMais" + plano + " adquirido";

    if (plano == 20) {
       text += plano;
       document.getElementById("resultado").innerHTML = text;
    }
    else if (plano == 80) {
        text += plano;
        document.getElementById("resultado").innerHTML = text;
    }
    else if (plano == 200) {
        text += plano;
        document.getElementById("resultado").innerHTML = text;
    }
}

var count = new Number ();
var count = text;

function call() {
    if ((count -1) >= 0) {
        count = count -1;
        minutos.innerText = count;
        setTimeout('call()', 1000);
    }
}

