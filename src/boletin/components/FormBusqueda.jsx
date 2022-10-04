import Swal from "sweetalert2";
import { useAuthStore } from "../../hook/useAuthStore";
import { useEvents } from "../../hook/useEvents";
import { useForm } from "../../hook/useForm";


export const FormBusqueda = ({categoria}) => {

    const { user, status } = useAuthStore();

  const {sendMail} = useEvents();

  const {onInputChange, instituto, curso, materia} = useForm(); 

  const onSearchSubmit = async(e) => {
    e.preventDefault();

    
    if(user.categoria !== categoria){
     return Swal.fire('Error', 'No está autorizado para utilizar este formulario', 'error');

    }

    if(instituto === 'Seleccionar Instituto' || curso === 'Seleccionar curso' || materia === 'Seleccionar materia' ||
      instituto === undefined || curso === undefined || materia === undefined
    ){
     return Swal.fire('Error', 'Deben estar seleccionadas todas las entradas', 'error');
    }

    // TODO: Chequear retorno de funcion sendMail para determinar que no tenga error
    await sendMail(user.email)

    Swal.fire({
      icon: 'success',
      title: 'Email enviado correctamente! ',
      showConfirmButton: false,
    })


  console.log({instituto, materia, curso})    
  };

  return (

    <>
    <h1>Busqueda y envío de boletín para <p className="fw-bold" >{categoria}</p></h1>
    <hr/>

    <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>

          <form onSubmit={onSearchSubmit} >
          <select onChange={onInputChange} name="instituto" value={instituto} className="form-select" aria-label="Default select example">
            <option defaultValue>Seleccionar Instituto</option>
            <option value="Instituto Don Torcuato">Instituto Don Torcuato</option>
            <option value="Instituto San Miguel">Instituto San Miguel</option>
            <option value="Instituto José C.Paz">Instituto José C.Paz</option>
          </select>

          <select  onChange={onInputChange} name="curso" value={curso} className="form-select mt-2" aria-label="Default select example">
            <option defaultValue>Seleccionar curso</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          
          <select  onChange={onInputChange} name="materia" value={materia} className="form-select mt-2" aria-label="Default select example">
            <option defaultValue>Seleccionar materia</option>
            <option value="Matemática">Matemática</option>
            <option value="Lengua">Lengua</option>
            <option value="Literatura">Literatura</option>
          </select>


          <button className="btn btn-outline-info mt-2">Send</button>
        </form>

        </div>

        <div className="col-7">
        <h4>Resultado</h4>
        <hr />

        <div className="alert alert-info">Buscando boletín</div>
        </div>
    </div>




  </>


    )
}
