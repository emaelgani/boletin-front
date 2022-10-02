import { useEffect } from "react";
import Swal from 'sweetalert2';
import { useAuthStore } from "../../hook/useAuthStore";
import { useForm } from "../../hook/useForm";

const loginFormFields = {
  email:'',
  password:''
}

export const LoginPage = () => {

  const {startLogin, errorMessage} = useAuthStore();
  const {email, password, onInputChange} = useForm(loginFormFields);



  const onLoginSubmit = (event) => {
    event.preventDefault();

    startLogin({email, password})

  }


  useEffect(() => {

    if(errorMessage !== undefined){
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }

  }, [errorMessage])
  




  return (
    <>
      <div className="container mt-5">
        <h1>LoginPage</h1>
        <form onSubmit={onLoginSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
