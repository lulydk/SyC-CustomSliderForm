import './Rounds.css'
import Round1Questions from '../../data/round1.json'
import { Slider } from '../../components/form/slider/Slider'

export function RoundOne() {
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