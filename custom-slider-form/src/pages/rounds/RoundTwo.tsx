import './Rounds.css'
import Round2Questions from '../../data/round2.json'
import { Slider } from '../../components/form/slider/Slider'
import { FormDataFields, FormDataFieldsR2 } from './FormDataFields'

type FormProps = FormDataFieldsR2 & {
    updateFields: (fields: Partial<FormDataFields>) => void
}

export function RoundTwo({r2_edi_1, r2_edi_2, r2_edi_3, r2_edi_4, r2_edi_5, r2_edi_6, r2_edi_7, r2_edi_8, updateFields}: FormProps) {
    return (
        <>
            <span className='title'>EDI</span>
            <span className='description mb-4'>Por favor, leé con atención las siguientes afirmaciones y calificá en qué medida se aplican a tu experiencia.</span>
            {
                Round2Questions.map(data => {
                    return (
                        data.prompts.map(question => {
                            return (
                                question['label-spanish'].length > 0 ? <Slider key={question['id']} id={question['id']} prompt={question['label-spanish']} translation={question['label-english']} lowerBound={data['lower-bound']} higherBound={data['higher-bound']} /> : <></>
                            )
                        })
                    )
                })
            }
        </>
    )
}