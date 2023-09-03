import { FormEvent, useContext } from 'react';
import '.././App.css'
import { AuthContext } from '../context/authContext';
import { doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

type UpdateStateType = () => void;

interface RoundProps {
    updateState: UpdateStateType;
}

export function Consent({ updateState }: RoundProps) {    

    const { currentUser, userDataRef, setUserDataRef } = useContext(AuthContext);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (userDataRef == null && currentUser != null) {
                setUserDataRef(doc(db, 'users', currentUser.uid));
            }
            updateState();
        } catch (error:any) {
            console.log('Error en Consentimiento', error.message);
        }
    };

    return (
    <>
        <span className='title'>Consentimiento informado</span>
        <p>
            Este proyecto de investigación fue aprobado por el <b>Comité de Ética Humana</b> de la <b>Facultad de Medicina de la Universidad de Buenos Aires</b>. Le informamos que la participación en este estudio es voluntaria y se rige bajo las normas éticas internacionales de investigación científica. Ud. debe ser mayor de 18 años para poder participar.<br/>
        </p>
        <p>
            <b>Acuerdo de confidencialidad:</b><br/>
            La información recolectada durante este estudio será guardada confidencialmente dentro de lo que estipula la Ley Argentina 25.326 de Protección de Datos Personales. Los resultados pueden ser publicados para propósitos científicos, pero la identidad de los participantes no será revelada.
        </p>
        <form onSubmit={handleSubmit}>
            <p>
                <b>¿Aceptás participar de este estudio?</b> De ser así, presioná "Aceptar" para comenzar con el experimento.
            </p>
            <div className='button-wrapper mt-3'>
                <button className='btn btn-primary' type='submit'>Aceptar</button>
            </div>
        </form>
    </>
    );
}
