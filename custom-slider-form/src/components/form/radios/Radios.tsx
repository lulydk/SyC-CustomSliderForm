import { useState } from 'react';
import './Radios.css'

export function Radios({ id, prompt, translation, choice1, choice2, choice3, choice4, choice5, choice6 } : { id: string; prompt: string; translation: string; choice1: string; choice2: string; choice3: string; choice4: string; choice5: string; choice6: string }) {
    
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value)
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
                        name={choice1}
                        value={choice1}
                        checked={selectedOption === choice1}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice1 }</label>
                </div>
                <div className="form-check col">
                    <input
                        type="radio"
                        className="form-check-input"
                        name={choice2}
                        value={choice2}
                        checked={selectedOption === choice2}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice2 }</label>
                </div>
                <div className="form-check col">
                    <input
                        type="radio"
                        className="form-check-input"
                        name={choice3}
                        value={choice3}
                        checked={selectedOption === choice3}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice3 }</label>
                </div>
                <div className="form-check col">
                    <input
                        type="radio"
                        className="form-check-input"
                        name={choice4}
                        value={choice4}
                        checked={selectedOption === choice4}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice4 }</label>
                </div>
                <div className="form-check col">
                    <input
                        type="radio"
                        className="form-check-input"
                        name={choice5}
                        value={choice5}
                        checked={selectedOption === choice5}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">{ choice5 }</label>
                </div>
                <div className="form-check col">
                    <input
                        type="radio"
                        className="form-check-input"
                        name={choice6}
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