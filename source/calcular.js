function calc () {
    var ddd11 = document.getElementById("ddd11").value;
    var ddd18 = document.getElementById("ddd18").value;
    var res = ddd11 + ddd18;

    if (ddd11 && ddd18) {
        document.getElementById("resultado").innerHTML = res;
    }
    else {
        document.getElementById("resultado").innerHTML = "nada a declarar";
    }
}