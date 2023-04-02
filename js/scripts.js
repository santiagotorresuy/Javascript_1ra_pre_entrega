/// EN PRINCIPIO DECLARO LAS VARIABLES ESENCIALES PARA LAS FUNCIONES, EN ESTE CASO EL TIPO DE ALF. PARA LAS RECETAS [ENTRADA DE DATOS]
let codigo = parseInt(prompt("Cuál alfajor deseas realizar?" + "\n\n" + "Alfajor de castañas (código 101)\n" + "Alfajor de cacao (código 102)\n" + "Alfajor de arándanos  (código 103)\n" + "Alfajor de limón (código 104)\n" +  "\n\n" + "Ingrese el código:"));

/// ACA HAGO LAS FUNCIONES CONSTANTES (IMPLICITAS) YA QUE NO VAN A CAMBIAR Y SON LOS PRIMEROS CALCULOS INDISPENSABLES PARA TENER LOS DATOS [PROCESO DE DATOS]
const cantidadDeMasas = function(unidades){
    masas = unidades / 23;
    return masas;
}

const cantidadDeIngredientes = function(masas){
    cajuEnTrozos = (masas*390) + "g";
    coco = (masas*270) + "g";
    canela = (masas*5) + "g";
    miel = (masas*140) + "g";
    cacao = (masas*5) + "g";
    mielArandanos = (masas*40) + "g";
    aceiteLimon = (masas*5) + "g";
}

/// ACA UTILICE LOS IF...ELSE PARA DIFERENCIAR ENTRE ALFAJOR, LLAMO A LA FUNCION Y A LOS DATOS PUNTUALES DEPENDIENDO DEL ALFAJOR [SALIDA DE DATOS]
if (codigo == parseInt(101)){
    unidades = parseInt(prompt("Ingrese la cantidad de unidades que desea realizar:"));
    alert("Se necesitan hacer " + cantidadDeMasas(unidades) + " masas");
    cantidadDeIngredientes(masas);
    alert("Se necesitan:" + "\n\n" + "Cajú en trozos = " + cajuEnTrozos + "\n" + "Coco = " + coco + "\n" + "Miel de dátiles = " + miel + "\n" + "Canela = " + canela);
}else if (codigo == parseInt(102)){
    unidades = parseInt(prompt("Ingrese la cantidad de unidades que desea realizar:"));
    alert("Se necesitan hacer " + cantidadDeMasas(unidades) + " masas");
    cantidadDeIngredientes(masas);
    alert("Se necesitan:" + "\n\n" + "Cajú en trozos = " + cajuEnTrozos + "\n" + "Coco = " + coco + "\n" + "Miel de dátiles = " + miel + "\n" + "Canela = " + canela + "\n" + "Cacao = " + cacao);
}else if (codigo == parseInt(103)){
    unidades = parseInt(prompt("Ingrese la cantidad de unidades que desea realizar:"));
    alert("Se necesitan hacer " + cantidadDeMasas(unidades) + " masas");
    cantidadDeIngredientes(masas);
    alert("Se necesitan:" + "\n\n" + "Cajú en trozos = " + cajuEnTrozos + "\n" + "Coco = " + coco + "\n" + "Miel de dátiles = " + miel + "\n" + "Canela = " + canela + "\n" + "Miel de arándanos = " + mielArandanos);
}else if (codigo == parseInt(104)){
    unidades = parseInt(prompt("Ingrese la cantidad de unidades que desea realizar:"));
    alert("Se necesitan hacer " + cantidadDeMasas(unidades) + " masas");
    cantidadDeIngredientes(masas);
    alert("Se necesitan:" + "\n\n" + "Cajú en trozos = " + cajuEnTrozos + "\n" + "Coco = " + coco + "\n" + "Miel de dátiles = " + miel + "\n" + "Canela = " + canela + "\n" + "Aceite de limón = " + aceiteLimon);
}else if (codigo != parseInt(101 || 102 || 103 || 104)) {
    alert("CÓDIGO INVÁLIDO: Ingrese el código correspondiente al alfajor");
} 

