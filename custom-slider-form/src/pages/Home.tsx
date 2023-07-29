import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser, registerUser } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import '.././App.css'

const defaultFormFields = {
  email: '',
  password: '',
}

function Home() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [showRegister, setShowRegister] = useState(false)

  const { email, password } = formFields
  const navigate = useNavigate()

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
    event.preventDefault()
    try {
      var userCredential;
      if (showRegister) {
        userCredential = await registerUser(email, password)
      } else {
        userCredential = await signInUser(email, password)
      }
      if (userCredential) {
        resetFormFields()
        navigate('/rounds')
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
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }

  return(
    <div className="App">
      <div className='wrapper'>
        <span className='title'>{ showRegister ? "Registrarse":"Iniciar sesión" }</span>
        { !showRegister && <span className='description mb-3'>Ingresa e-mail y contraseña para poder <b>empezar</b> o <b>continuar</b> el cuestionario.</span> }
        { showRegister && <span className='description mb-3'>Ingresa e-mail y contraseña para registrarse y empezar el cuestionario.</span> }
        <form onSubmit={handleSubmit}>
          <div className='row gap-3'>
            <div className='col'>
              <label className="form-label">Correo electrónico</label>
              <input required type='email' name='email' className="form-control" placeholder="ejemplo@gmail.com" onChange={handleChange} />
            </div>
            <div className="col">
              <label className="form-label">Contraseña</label>
              <input required type='password' name='password' className="form-control" placeholder="********" onChange={handleChange} />
            </div>
          </div>
          <div className='buttonWrapper mt-4'>
            <button className='btn btn-primary' type='submit'>{ showRegister ? "Registrarse":"Iniciar sesión" }</button>
          </div>
        </form>
        <div className='buttonWrapper mt-0'>
          <button className='btn' onClick={changeForm}>{ showRegister ? "Iniciar sesión":"Registrarse" }</button>
        </div>
      </div>
    </div>
  )
}

export default Home
