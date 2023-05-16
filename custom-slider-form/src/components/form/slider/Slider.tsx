import { useState } from 'react';
import './Slider.css'

export function Slider({ id, prompt, translation, lowerBound, higherBound } : { id: string; prompt: string; translation: string; lowerBound: string; higherBound: string }) {

    const [sliderVal, setSliderVal] = useState(50)

    const onChangeValue = (e : React.FormEvent<HTMLInputElement>) => {
        setSliderVal(+e.currentTarget.value)
    }

    return (
        <>
            <label className="form-label">
                <span className="prompt">{ prompt }</span><br/>
                <small className="translate">{ translation }</small>
            </label>
            <div className="d-flex row align-items-center mb-4">
                <div className="col col-1 text-center">
                    <small>{ lowerBound }</small>
                </div>
                <div className="col">
                    <input type="range" className="form-range" id={id} value={sliderVal} min={0} max={100} onChange={e => onChangeValue(e)} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title={sliderVal} />
                </div>
                <div className="col col-1 text-center">
                    <small>{ higherBound }</small>
                </div>
            </div>
        </>
    )
}