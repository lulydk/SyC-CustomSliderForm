import { FormEvent, useState } from 'react';
import './Slider.css'

export type SliderParams = {
    id: string
    prompt: string
    translation: string
    value: number
    lowerBound: string
    higherBound: string
    round: number
}

type FormProps = SliderParams & {
    updateFields: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Slider({ id, prompt, translation, value, lowerBound, higherBound, round, updateFields } : FormProps) {

    const [sliderVal, setSliderVal] = useState(value);

    const onChangeValue = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSliderVal(+e.currentTarget.value);
        updateFields(e);
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
                    <input type="range" className="form-range" id={id} name={id} value={sliderVal} min={0} max={100} onChange={e => onChangeValue(e)} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title={sliderVal} />
                </div>
                <div className="col col-1 text-center">
                    <small>{ higherBound }</small>
                </div>
            </div>
        </>
    )
}