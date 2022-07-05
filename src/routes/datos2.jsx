import {useParams} from "react-router-dom";
import { getDatos2 } from "../data";
import datosalumno from "./datosalumno";
export default function Datos2(){
    let params = useParams();
    let datos2 = getDatos2(parseInt(params.datos2Datosalumno));
    return(
        <h2>
        <h2>Nombre del alumno: Brandon Alfredo Flores Torres</h2>
        <p>Matricula:190954</p>
    </h2>

    );

    }