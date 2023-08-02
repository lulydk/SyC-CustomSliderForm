import './Rounds.css'
import Round3Questions from '../../data/round3.json'
import { Radios } from '../../components/form/radios/Radios'
import { FormDataFields, FormDataFieldsR3 } from './FormDataFields'

type FormProps = FormDataFieldsR3 & {
    updateFields: (fields: Partial<FormDataFields>) => void
}

export function RoundThree({r3_meq_1, r3_meq_2, r3_meq_3, r3_meq_4, r3_meq_5, r3_meq_6, r3_meq_7, r3_meq_8, r3_meq_9, r3_meq_10, r3_meq_11, r3_meq_12, r3_meq_13, r3_meq_14, r3_meq_15, r3_meq_16, r3_meq_17, r3_meq_18, r3_meq_19, r3_meq_20, r3_meq_21, r3_meq_22, r3_meq_23, r3_meq_24, r3_meq_25, r3_meq_26, r3_meq_27, r3_meq_28, r3_meq_29, r3_meq_30, updateFields}: FormProps) {
    return (
        <>
            <span className='title'>MEQ</span>
            <span className='description mb-4'>Por favor, considere su experiencia más memorable y califique el grado en que experimentó los siguientes fenómenos.</span>
            {
                Round3Questions.map(data => {
                    return (
                        data.prompts.map(question => {
                            return (
                                question['label-spanish'].length > 0 ? <Radios key={question['id']} id={question['id']} prompt={question['label-spanish']} translation={question['label-english']} choice1={data['choice-1']} choice2={data['choice-2']} choice3={data['choice-3']} choice4={data['choice-4']} choice5={data['choice-5']} choice6={data['choice-6']} /> : <></>
                            )
                        })
                    )
                })
            }
        </>
    )
}