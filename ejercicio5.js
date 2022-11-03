/**1.	"Desarrolle un algoritmo para la empresa Constructora
 *  Tecnovivir Casas C.A., que le permita calcular e" imprimir
 *  la nómina para su cancelación a un total de 50 obreros 
 * calificados a quienes debe cancelar por horas trabajadas. 
 * Lahora trabajada se pautó en 30.000 Bolívares.
 */

const nominaEmpleados = {id:'',nombre:'', nomina:''}
const nominas ={}
for(i=1; i<3; i++){
    let horasTrabajadas, nombre;
    
    do {
        nombre=prompt(`${i} ingrese su nombre: `);
        horasTrabajadas = parseInt(prompt(`Horas laboradas ${i}:`));
    } while ((isNaN(horasTrabajadas)));
    
    nominaEmpleados.id=i;
    nominaEmpleados.nombre=nombre;
    nominaEmpleados.nomina=i*30000;
 
    console.log(nominaEmpleados)

}

