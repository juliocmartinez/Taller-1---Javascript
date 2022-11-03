/**
 * 4.	"Desarrolle un algoritmo que permita leer dos números
 *  y ordenarlos de menor a mayor, si es el caso."
 */

 let r,h;
    


 do {
     r = parseInt(prompt("Digite #1: "));
     h = parseInt(prompt("Digite #2: "));
 } while ((isNaN(r) && isNaN(h)) ||(isNaN(r) || isNaN(h)));
 
const ordenarNum = [r,h]
ordenarNum.sort((r,h)=>{
    return r-h

})

console.log(ordenarNum2)