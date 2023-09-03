import { AuthContext } from '../context/authContext';
import { FormEvent, useContext, useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import '../App.css'

type UpdateStateType = () => void;

interface RoundProps {
    updateState: UpdateStateType;
}

const defaultFormFields = {
    age: null,
    gender: "",
    contactMail: ""
}
  
export function Start({ updateState }: RoundProps) {    

    const [ formData, setFormData ] = useState(defaultFormFields);
    const { currentUser, userDataRef, setUserDataRef } = useContext(AuthContext);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const [selectedOption, setSelectedOption] = useState('');
    
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            ['gender']: selectedOption,
          }));
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (userDataRef == null && currentUser != null) {
                console.log("userdataref is null");
                setUserDataRef(doc(db, 'users', currentUser.uid));
            }
            if (userDataRef != null) {
                console.log("updating doc");
                updateDoc(userDataRef, formData).finally(updateState);
            }
        } catch (error:any) {
            console.log('Error en start', error.message);
        }
    };

    return (
    <>
        <span className='title'>Sueño y Consciencia</span>
        <p>
            ¡Hola! Al completar este formulario estarías participando de un proyecto de investigación científica conducido por el <a href='https://www.labsuenoymemoria.com/'><b>Laboratorio de Sueño y Memoria</b></a> del <a href='https://www.itba.edu.ar/'><b>Instituto Tecnológico de Buenos Aires (ITBA)</b></a>. Completar este formulario puede llevarte entre 15 y 20 minutos.<br/>
        </p>
        <p>
            En este estudio buscamos comprender distintos estados de consciencia que ocurren durante el sueño. Nos vamos a centrar en tres tipos de experiencias distintas:
        </p>
        <ul>
            <li>
                <b>Sueños Lúcidos:</b> Sueños en los que tenemos consciencia de estar soñando. Es decir, cuando sabemos que estamos soñando mientras el sueño transcurre. 
            </li>
            <li>
                <b>Parálisis de Sueño:</b> Ocurren cuando nos despertamos y no podemos hablar ni movernos voluntariamente. En algunos casos, las personas pueden tener alucinaciones visuales, auditivas y/o táctiles.
            </li>
            <li>
                <b>Experiencias Fuera del Cuerpo:</b> Refieren a la sensación de estar por fuera de nuestro cuerpo y percibir el mundo desde una perspectiva externa. Pueden ocurrir durante el sueño y durante la vigilia. 
            </li>
        </ul>
        <p>
            Cualquier duda o consulta que tengas podés escribirnos:
        </p>
        <ul>
            <li>
                <b>Dra. Cecilia Forcato:</b> cforcato@itba.edu.ar
            </li>
            <li>
                <b>Lic. Nerea Herrero:</b> neherrero@itba.edu.ar
            </li>
        </ul>
        <p>
            ¡Muchas gracias por tu participación!
        </p>
        <hr/>
        <div className='mt-2'>
            <span className='title'>Datos del participante</span>
            <p>
                Te recordamos que todos los datos recolectados son confidenciales.
            </p>
            {
                currentUser &&
                <form onSubmit={handleSubmit}>
                    <div className='col start-form'>
                        <label className="form-label">Mail de contacto</label>
                        <input required type='email' name='contactMail' className="form-control" placeholder="ejemplo@gmail.com" onChange={handleInputChange} />
                    </div>
                    <div className='col my-3 start-form'>
                        <label className="form-label">Edad</label>
                        <input required type='number' name='age' className="form-control" placeholder="18 o más" onChange={handleInputChange} />
                    </div>
                    <div className='col start-form'>
                        <label className="form-label">Género</label>
                        <div className="form-wrapper">
                            <div className="form-check">
                                <input required className="form-check-input" type="radio" name="gender" id="F" value="F" onChange={handleOptionChange} />
                                <label className="form-check-label">Femenino</label>
                            </div>
                            <div className="form-check">
                                <input required className="form-check-input" type="radio" name="gender" id="M" value="M" onChange={handleOptionChange} />
                                <label className="form-check-label">Masculino</label>
                            </div>
                            <div className="form-check">
                                <input required className="form-check-input" type="radio" name="gender" id="O" value="O" onChange={handleOptionChange} />
                                <label className="form-check-label">Otro</label>
                            </div>
                        </div>
                    </div>
                    <div className='button-wrapper mt-4 mb-2'>
                        <button className='btn btn-primary' type='submit'>Continuar</button>
                    </div>
                </form>
            }
        </div>
    </>
    );
}
