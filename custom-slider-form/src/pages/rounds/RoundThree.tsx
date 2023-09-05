import Round3Questions from '../../data/round3.json'
import { Radios } from '../../components/form/radios/Radios'
import { FormEvent, useContext, useEffect, useState } from "react";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { updateForm3, INITIAL_DATA_R3, FormDataFields, FormDataFieldsR3 } from "./FormDataFields";
import { AuthContext } from '../../context/authContext';
import './Rounds.css'

type UpdateStateType = () => void;

interface RoundProps {
    updateState: UpdateStateType;
}

export function RoundThree({ updateState }: RoundProps) {

    const [ formData, setFormData ] = useState(INITIAL_DATA_R3);
    const { currentUser, userDataRef, setUserDataRef } = useContext(AuthContext);
    const [ disableButton, setDisableButton ] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDisableButton(true);
        try {
            if (userDataRef == null && currentUser != null) {
                setUserDataRef(doc(db, 'users', currentUser.uid));
            }
            if (userDataRef != null) {
                console.log("updating doc round3");
                updateForm3(userDataRef, formData);
                updateState();
            }
        } catch (error:any) {
            console.log('Error en paso 3', error.message);
        }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (currentUser) {
    //             if (userDataRef == null) {
    //                 setUserDataRef(doc(db, 'users', currentUser.uid));
    //             }
    //             if (userDataRef != null) {
    //                 const docSnap = await getDoc(userDataRef);
    //                 let firestoreData : DocumentData = docSnap.data() as DocumentData;
    //                 Object.keys(formData).forEach((key) => {
    //                     if (firestoreData.includes(key)) {
    //                         const value = firestoreData[key];
    //                         setFormData((prevFormData) => ({
    //                             ...prevFormData,
    //                             [key]: value,
    //                         }));
    //                     }
    //                 });
    //             }
    //         }
    //     }
    //     fetchData().catch(console.error);
    // }, [currentUser])

    return (
        <>
            <span className='title'>MEQ</span>
            <span className='description mb-4'>Por favor, considere su experiencia más memorable y califique el grado en que experimentó los siguientes fenómenos.</span>
            <form onSubmit={handleSubmit}>
            {
                Round3Questions.map(data => {
                    return (
                        data.prompts.map(question => {
                            return (
                                question['label-spanish'].length > 0 ? <Radios key={question['id']} id={question['id']} prompt={question['label-spanish']} translation={question['label-english']} value={formData[question['id'] as keyof typeof formData]} choice1={data['choice-1']} choice2={data['choice-2']} choice3={data['choice-3']} choice4={data['choice-4']} choice5={data['choice-5']} choice6={data['choice-6']} updateFields={handleInputChange} /> : <></>
                            )
                        })
                    )
                })
            }
            <div className='button-wrapper mt-3'>
                <button className='btn btn-primary' type='submit' disabled={disableButton}>{ disableButton ? 'Guardando...':'Finalizar' }</button>
            </div>
            </form>
        </>
    )
}