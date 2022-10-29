/**
 * 3.Desarrolle un algoritmo que permita determinar el área 
 * lateral y volumen de un cilindro dado su radio (R) y altura
 *  (H). Formula: (VOL = π * R^2 * H), 
 * (AREA_LATERAL = 2 * π * R * H)
 */
let r = parseInt(prompt("Digite el radio del cilindro"));
let h = parseInt(prompt("Digite la altura del cilindro"));


function volCilindro(r,h){
    let vol = Math.PI * Math.pow(r,2)*h;
    return vol;
}

let resultado = volCilindro(r,h)
let result = resultado.toFixed(4)

let html = `<h3>3.Desarrolle un algoritmo que permita determinar el área 
* lateral y volumen de un cilindro dado su radio (R) y altura
*  (H). Formula: (VOL = π * R^2 * H), 
* (AREA_LATERAL = 2 * π * R * H)</h3>
<p>Resultado: ${result} unidades cubicas</p>`


document.getElementById("root").innerHTML=html;

