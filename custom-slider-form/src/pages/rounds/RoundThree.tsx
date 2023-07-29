import './Rounds.css'
import Round3Questions from '../../data/round3.json'
import { Radios } from '../../components/form/radios/Radios'

export function RoundThree() {
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