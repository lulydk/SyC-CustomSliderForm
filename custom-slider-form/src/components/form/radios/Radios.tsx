import { useState } from 'react';
import './Radios.css'
import { FormDataFields, INITIAL_DATA_R3 } from '../../../pages/rounds/FormDataFields';

export type RadioParams = {
    id: string
    prompt: string
    translation: string
    value: string
    choice1: string
    choice2: string
    choice3: string
    choice4: string
    choice5: string
    choice6: string
}

type FormProps = RadioParams & {
    updateFields: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Radios({ id, prompt, translation, value, choice1, choice2, choice3, choice4, choice5, choice6, updateFields } : FormProps) {
    
    const [selectedOption, setSelectedOption] = useState(value);
    
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        updateFields(e);
    }

    return (
        <>
            <label className="form-label">
                <span className="prompt">{ prompt }</span><br/>
                <small className="translate">{ translation }</small>
            </label>
            <div className="form-wrapper">
                <div className="form-check col">
                    <input
                        type="radio"
                        className="form-check-input"
                        name={id}
                        value={choice1}
                        checked={selectedOption === choice1}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice1 }</label>
                </div>
                <div className="form-check col">
                    <input
                        required
                        type="radio"
                        className="form-check-input"
                        name={id}
                        value={choice2}
                        checked={selectedOption === choice2}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice2 }</label>
                </div>
                <div className="form-check col">
                    <input
                        required
                        type="radio"
                        className="form-check-input"
                        name={id}
                        value={choice3}
                        checked={selectedOption === choice3}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice3 }</label>
                </div>
                <div className="form-check col">
                    <input
                        required
                        type="radio"
                        className="form-check-input"
                        name={id}
                        value={choice4}
                        checked={selectedOption === choice4}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice4 }</label>
                </div>
                <div className="form-check col">
                    <input
                        required
                        type="radio"
                        className="form-check-input"
                        name={id}
                        value={choice5}
                        checked={selectedOption === choice5}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice5 }</label>
                </div>
                <div className="form-check col">
                    <input
                        required
                        type="radio"
                        className="form-check-input"
                        name={id}
                        value={choice6}
                        checked={selectedOption === choice6}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice6 }</label>
                </div>
            </div>
        </>
    );
}