import './RoundThree.css'
import Round3Questions from '../../../data/round3.json'

export function RoundThree() {
    return (
        <>
            <span className='title'>MEQ</span>
            <span className='description mb-4'>Por favor, considere su experiencia más memorable y califique el grado en que experimentó los siguientes fenómenos.</span>
            {/* {
                Round3Questions.map(data => {
                    return (
                        data.prompts.map(question => {
                            return (
                                question['label-spanish'].length > 0 ? <></> : <></>
                            )
                        })
                    )
                })
            } */}
        </>
    )
}