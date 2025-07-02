import Fetch from "../Services/Fetch";
import Swal from "sweetalert2";

async function Roles(username, nuevoGrupo) {
  const payload = { username: username, grupo: nuevoGrupo };

  try {
    const respuesta = await Fetch.postData(payload, "api/rol/");
    
    if (respuesta.mensaje) {
      Swal.fire("Rol actualizado", respuesta.mensaje, "success");
    } else if (respuesta.error) {
      Swal.fire("Error", respuesta.error, "error");
    } else {
      Swal.fire("Error", "No se pudo actualizar el rol.", "error");
    }
  } catch (error) {
    Swal.fire("Error de red", "No se pudo conectar al servidor.", "error");
  }
}

export default Roles;