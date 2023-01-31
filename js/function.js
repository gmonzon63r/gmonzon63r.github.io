

function mostrar(idMenu){  
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("trabajosTexto").style.display="none";
    document.getElementById("contactoTexto").style.display="none";
    document.getElementById("datosPersonalesTexto").style.display="none";
    document.getElementById("estudiosTexto").style.display="none";
    document.getElementById(idMenu).style.visibility="visible";
    document.getElementById(idMenu).style.display= "inline";
}
