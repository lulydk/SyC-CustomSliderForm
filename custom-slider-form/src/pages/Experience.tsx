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
    experience: ""
}
  
export function Experience({ updateState }: RoundProps) {    

    const [ formData, setFormData ] = useState(defaultFormFields);
    const { currentUser, userDataRef, setUserDataRef } = useContext(AuthContext);


    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (formData.experience.length > 0) {
            try {
                if (userDataRef == null && currentUser != null) {
                    setUserDataRef(doc(db, 'users', currentUser.uid));
                }
                if (userDataRef != null) {
                    await updateDoc(userDataRef, formData);
                    updateState();
                }
            } catch (error:any) {
                console.log('Error en Contanos tu Experiencia', error.message);
            }
        }
    };

    return (
    <>
        <span className='title'>Contanos tu Experiencia</span>
        <p>
            Antes de empezar, vamos a pedirte que te concentres en algún episodio en el que hayas tenido un <b>Sueño Lúcido</b>, <b>Parálisis de Sueño</b> o una <b>Experiencia Fuera del Cuerpo</b>. Es importante que intentes recordar todos los detalles posibles de esa experiencia, cómo te sentiste en ese momento, dónde estabas y cualquier otro elemento que consideres importante.<br/>
        </p>
        <p>
            Ahora te vamos a pedir que relates la experiencia que consideraste:
        </p>
        {
            currentUser &&
            <form onSubmit={handleSubmit}>
                <div className='col'>
                    <textarea required rows={3} name='experience' className="form-control" placeholder="Escribe tu experiencia aquí..." onChange={handleInputChange}/>
                </div>
                <div className='button-wrapper mt-4 mb-2'>
                    <button className='btn btn-primary' type='submit'>Continuar</button>
                </div>
            </form>
            }
    </>
    );
}
