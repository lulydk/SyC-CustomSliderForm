import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser, registerUser, continueWithGoogle } from '../firebase/firebase'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import '.././App.css'

const defaultFormFields = {
  email: '',
  password: '',
}

function Home() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    let { state } = useLocation();
    const [showRegister, setShowRegister] = useState(state);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const resetFormFields = () => {
        return (
            setFormFields(defaultFormFields)
        );
    }

    const changeForm = () => {
        return (
            setShowRegister(!showRegister)
        );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            var userCredential;
            if (showRegister) {
                userCredential = await registerUser(email, password);
            } else {
                userCredential = await signInUser(email, password);
            }
            if (userCredential) {
                resetFormFields();
                navigate('/rounds');
            }
        } catch (error:any) {
            if (showRegister) {
                console.log('User Register Failed', error.message);
            } else {
                console.log('User Sign In Failed', error.message);
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Handling form');
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    }

    return (
      <div className='wrapper d-flex flex-column align-items-center justify-content-center'>
        <span className='title'>{ showRegister ? "Registrarse":"Iniciar sesión" }</span>
        { !showRegister && <span className='description mb-3'>Ingresa e-mail y contraseña para poder <b>empezar</b> o <b>continuar</b> el estudio.</span> }
        { showRegister && <span className='description mb-3'>Ingresa e-mail y contraseña para registrarse y <b>empezar</b> el estudio.</span> }
        <form onSubmit={handleSubmit} className='auth-form'>
          <div className='row gap-3'>
            <div className='col'>
              <label className="form-label">Correo electrónico</label>
              <input required type='email' name='email' className="form-control" placeholder="ejemplo@gmail.com" onChange={handleChange} />
            </div>
            <div className="col">
              <label className="form-label">Contraseña</label>
              <input required type='password' name='password' className="form-control" placeholder="********" onChange={handleChange} />
              {/*
                { !showRegister && 
                  <small className='d-flex justify-content-end'><Link to='/reset'>¿Olvidaste tu contraseña?</Link></small>
                }
              */}
            </div>
          </div>
          <div className='button-wrapper mt-4 mb-2'>
              <button className='btn btn-primary' type='submit'>{ showRegister ? "Registrarse":"Iniciar sesión" }</button>
          </div>
        </form>
        <div className='pointy d-flex flex-row align-items-center justify-content-center gap-1 mt-2'>
            { showRegister ? "¿Ya tenés cuenta?":"¿No tenés cuenta?" } <a onClick={changeForm} href='#'>{ showRegister ? "Iniciar sesión":"Registrate" }</a>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center mt-3 gap-3 col-10'>
            <hr />
            o
            <hr className='sep'/>
        </div>
        <div className='pointy d-flex flex-row align-items-center justify-content-center gap-1 mt-3'>
            <GoogleButton type="light" label="Continuar con Google" onClick={continueWithGoogle}/>
        </div>
      </div>
    );


}

export default Home
