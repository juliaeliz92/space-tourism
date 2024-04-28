import React from "react"

interface StepperProps {
    steps: string[],
    selectedStep: string,
    handleSelection: (arg: string) => void
}

interface StepItemProps {
    value: string,
    active: boolean,
    handleClick: (arg: string) => void
}

const StepItem: React.FC<StepItemProps> = ({ value, active, handleClick}) => {
    return <div 
        className={`w-2.5 h-2.5 rounded-full hover:bg-[#D3D3D3] ${active ? 'bg-white' : 'bg-[#979797]'}`}
        onClick={() => handleClick(value)}>

    </div>
} 

const Stepper: React.FC<StepperProps> = ({ steps, selectedStep, handleSelection }) => {
    console.log(selectedStep, steps)
    return <div className="flex gap-2 md:gap-4 lg:gap-6">
        {steps.map((step, ind) => 
            <StepItem key={ind} value={step} active={selectedStep === step} handleClick={(value) => handleSelection(value)}/>
        )}
    </div>
}

export default Stepper