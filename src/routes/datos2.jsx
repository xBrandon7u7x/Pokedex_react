import {useParams} from "react-router-dom";
import { getDatos2 } from "../data";
export default function Datos2(){
    let params = useParams();
    let datos2 = getDatos2(parseInt(params.datos2Datosalumno));
    return(
        <h2>
        <h2>Matricula del alumno:{datos2.number}</h2>
        <p>
            Nombre del alumno:{datos2.name}
        </p>
    </h2>

    );

    }