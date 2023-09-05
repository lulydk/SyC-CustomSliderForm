import Round2Questions from '../../data/round2.json'
import { Slider } from '../../components/form/slider/Slider'
import { FormEvent, useContext, useEffect, useState } from "react";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { updateForm2, INITIAL_DATA_R2, FormDataFields, FormDataFieldsR2 } from "./FormDataFields";
import { AuthContext } from '../../context/authContext';
import './Rounds.css'

type UpdateStateType = () => void;

interface RoundProps {
    updateState: UpdateStateType;
}

export function RoundTwo({ updateState }: RoundProps) {

    const [ formData, setFormData ] = useState(INITIAL_DATA_R2);
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
        event.preventDefault()
        setDisableButton(true);
        try {
            if (userDataRef == null && currentUser != null) {
                setUserDataRef(doc(db, 'users', currentUser.uid));
            }
            if (userDataRef != null) {
                console.log("updating doc round2");
                updateForm2(userDataRef, formData);
                updateState();
            }
        } catch (error:any) {
            console.log('Error en paso 2', error.message);
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
            <div className='wrapper-title'>
                <span className='title row'>EDI</span>
                <span className='description mb-4 row'>Por favor, leé con atención las siguientes afirmaciones y calificá en qué medida se aplican a tu experiencia.</span>
            </div>
            <form onSubmit={handleSubmit}>
            {
                Round2Questions.map(data => {
                    return (
                        data.prompts.map(question => {
                            return (
                                question['label-spanish'].length > 0 ? <Slider key={question['id']} id={question['id']} prompt={question['label-spanish']} translation={question['label-english']} value={formData[question['id'] as keyof typeof formData]} lowerBound={data['lower-bound']} higherBound={data['higher-bound']} round={2} updateFields={handleInputChange} /> : <></>
                            )
                        })
                    )
                })
            }
            <div className='button-wrapper mt-3'>
                <button className='btn btn-primary' type='submit' disabled={disableButton}>{ disableButton ? 'Guardando...':'Siguiente' }</button>
            </div>
            </form>
        </>
    )
}