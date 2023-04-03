import './RoundTwo.css'
import Round2Questions from '../../data/round2.json'
import { Slider } from '../../components/form/slider/Slider'

export function RoundTwo() {
    return (
        <>
            <span className='title'>Disolución del Ego</span>
            <span className='description mb-4'>Por favor, leé con atención las siguientes afirmaciones y calificá en qué medida se aplican a tus episodios de parálisis de sueño.</span>
            {
                Round2Questions.map(data => {
                    return (
                        data.prompts.map(question => {
                            return (
                                question['label-spanish'].length > 0 ? <Slider prompt={question['label-spanish']} translation={question['label-english']} lowerBound={data['lower-bound']} higherBound={data['higher-bound']} /> : <></>
                            )
                        })
                    )
                })
            }
        </>
    )
}