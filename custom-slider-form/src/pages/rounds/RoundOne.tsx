import Round1Questions from '../../data/round1.json'
import { Slider } from '../../components/form/slider/Slider'
import { FormDataFields, FormDataFieldsR1 } from './FormDataFields' 
import './Rounds.css'

type FormProps = FormDataFieldsR1 & {
    updateFields: (fields: Partial<FormDataFields>) => void
}

export function RoundOne({r1_5dasc_1, r1_5dasc_2, r1_5dasc_3, r1_5dasc_4, r1_5dasc_5, r1_5dasc_6, r1_5dasc_7, r1_5dasc_8, r1_5dasc_9, r1_5dasc_10, r1_5dasc_11, r1_5dasc_12, r1_5dasc_13, r1_5dasc_14, r1_5dasc_15, r1_5dasc_16, r1_5dasc_17, r1_5dasc_18, r1_5dasc_19, r1_5dasc_20, r1_5dasc_21, r1_5dasc_22, r1_5dasc_23, r1_5dasc_24, r1_5dasc_25, r1_5dasc_26, r1_5dasc_27, r1_5dasc_28, r1_5dasc_29, r1_5dasc_30, r1_5dasc_31, r1_5dasc_32, r1_5dasc_33, r1_5dasc_34, r1_5dasc_35, r1_5dasc_36, r1_5dasc_37, r1_5dasc_38, r1_5dasc_39, r1_5dasc_40, r1_5dasc_41, r1_5dasc_42, r1_5dasc_43, r1_5dasc_44, r1_5dasc_45, r1_5dasc_46, r1_5dasc_47, r1_5dasc_48, r1_5dasc_49, r1_5dasc_50, r1_5dasc_51, r1_5dasc_52, r1_5dasc_53, r1_5dasc_54, r1_5dasc_55, r1_5dasc_56, r1_5dasc_57, r1_5dasc_58, r1_5dasc_59, r1_5dasc_60, r1_5dasc_61, r1_5dasc_62, r1_5dasc_63, r1_5dasc_64, r1_5dasc_65, r1_5dasc_66, r1_5dasc_67, r1_5dasc_68, r1_5dasc_69, r1_5dasc_70, r1_5dasc_71, r1_5dasc_72, r1_5dasc_73, r1_5dasc_74, r1_5dasc_75, r1_5dasc_76, r1_5dasc_77, r1_5dasc_78, r1_5dasc_79, r1_5dasc_80, r1_5dasc_81, r1_5dasc_82, r1_5dasc_83, r1_5dasc_84, r1_5dasc_85, r1_5dasc_86, r1_5dasc_87, r1_5dasc_88, r1_5dasc_89, r1_5dasc_90, r1_5dasc_91, r1_5dasc_92, r1_5dasc_93, r1_5dasc_94, updateFields}: FormProps) {
 return (
  <>
         <span className='title'>5D-ASC</span>
            <span className='description mb-4'>Ahora vamos a hacerte algunas preguntas sobre esa experiencia en particular.</span>
            {
                Round1Questions.map(data => {
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