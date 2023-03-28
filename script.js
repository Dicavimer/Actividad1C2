let num1= document.getElementById("num1");
let num2= document.getElementById("num2");
let operar= document.getElementById("botones");
let respuesta;
let salida = document.getElementById("resultado");

const Calcular = ()=>{
    let simbolo= operar.elements["Operador"].value;
    if(simbolo=="+"){
        respuesta= parseInt(num1.value)+parseInt(num2.value)
        salida.innerHTML= `El resultado de la suma es: ${respuesta}`;
    }
    else if(simbolo=="-"){
       respuesta= parseInt(num1.value)-parseInt(num2.value)
        salida.innerHTML= `El resultado de la resta es: ${respuesta}`;
    }
    else if(simbolo=="x"){
        respuesta= parseInt(num1.value)*parseInt(num2.value)
        salida.innerHTML= `El resultado de la multiplicación es: ${respuesta}`;
    }
    else if(simbolo=="/"){
        respuesta= parseInt(num1.value)/parseInt(num2.value)
        salida.innerHTML= `El resultado de la división es: ${respuesta}`;
    }
    else{
        alert("error, revise los datos ingresados y haber presionado el botón para operar los números")
    }
}

const Borrar = ()=>{
    num1.value="";
    num2.value="";
    salida.innerHTML="";
    operar.elements["Operador"].value="";
}
