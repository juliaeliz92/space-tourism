import React from "react"

interface StepperLargeProps {
    steps: string[],
    isColumn?: boolean,
    selectedStep: string,
    handleSelection: (arg: string) => void
}

interface StepperLargeItemProps {
    index: number,
    value: string,
    active: boolean,
    handleClick: (arg: string) => void
}

const StepperLargeItem: React.FC<StepperLargeItemProps> = ({ index, active, value, handleClick}) => {
    return <div 
        className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border border-white ${active ? 'bg-white text-black' : 'bg-transparent text-white'} hover:border-2 hover:cursor-pointer flex justify-center items-center`}
        onClick={() => handleClick(value)}
    >
        {index}
    </div>
}

const StepperLarge: React.FC<StepperLargeProps> = ({ steps, selectedStep, handleSelection }) => {
    return <div className='flex lg:flex-col gap-4 md:gap-8'>
        {steps.map((step, index) => <StepperLargeItem 
        key={index} 
        index={index + 1} 
        value={step} 
        active={selectedStep === step}
        handleClick={handleSelection} 
    />)}
    </div>
}

export default StepperLarge