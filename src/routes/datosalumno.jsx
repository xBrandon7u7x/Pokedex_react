import { getdatosalumno } from "../data";
import{Link, Outlet} from "react-router-dom";
export default function datosalumno(){

let datosalumno = getdatosalumno()

return(

<div className="pokemon-card">

<h2>
{datosalumno.map((datos2)=>( <Link style={{display: "block", margin:"1rem 0"}} to = {`/datos2/${datos2.number}`} key= {datos2.number}>
Brandon Alfredo Flores Torres</Link>))}
</h2>
<Outlet/>

</div>

);}