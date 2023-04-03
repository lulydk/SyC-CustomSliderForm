import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIdx, setCurrentStepIdx] = useState(0)
    
    function next() {
        setCurrentStepIdx(i => {
            if (i >= steps.length - 1)
                return i
            return i + 1
        })
    }

    function back() {
        setCurrentStepIdx(i => {
            if (i <= 0)
                return i
            return i - 1
        })
    }

    function goto(idx: number) {
        setCurrentStepIdx(idx)
    }

    return {
        currentStepIdx,
        step: steps[currentStepIdx],
        steps,
        isFirstStep: currentStepIdx === 0,
        isLastStep: currentStepIdx === steps.length - 1,
        goto,
        next,
        back
    }
}