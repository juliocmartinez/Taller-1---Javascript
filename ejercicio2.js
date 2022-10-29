/**
 * 2.	Determinar la hipotenusa de un triángulo rectángulo
 *  conocidas las longitudes de sus dos catetos. 
 * Desarrolle el algoritmo correspondiente. 
 * Formula: (HIP = √CATa + √CATb)
 */

let catA = parseInt(prompt("Ingrese el cateto a"));
let catB = parseInt(prompt("Ingrese el cateto b"));

let hipotenusa = Math.sqrt((catA*catA) + (catB*catB));


while ((isNaN(catA) && isNaN(catB)) ||(isNaN(catA) || isNaN(catB))){
    catA = parseInt(prompt("Ingrese el cateto a"));
    catB = parseInt(prompt("Ingrese el cateto b"));
    hipotenusa = Math.sqrt((catA*catA) + (catB*catB));


}

let html = `<h3>2.	Determinar la hipotenusa de un triángulo rectángulo
conocidas las longitudes de sus dos catetos. 
Desarrolle el algoritmo correspondiente. 
Formula: (HIP = √CATa + √CATb)</h3>` 

document.getElementById("root").innerHTML = `${html} La hipotenusa del triangulo
de lados ${catA} y ${catB} es: ${hipotenusa} unidades`;

