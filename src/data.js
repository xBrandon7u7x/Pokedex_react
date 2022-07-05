let id = [
    {
    number: 190954,
    name: "Brandon Alfredo Flores Torres",  
}
];
export function getdatosalumno(){
    return datosalumno;
}
export function getDatos2(number){
    return datosalumno.find((datos2)=> datos2.number===number);
}