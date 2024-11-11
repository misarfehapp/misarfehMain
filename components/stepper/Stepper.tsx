interface StepperProps {
  currentStep: number;
  progress: number;
  selectedOption: string;
}

const StepsToReceive = (selectedOption: string) => [
  {
    step: "تایید رستوران",
    number: 1,
  },
  {
    step: "آماده سازی سفارش",
    number: 2,
  },
  {
    step: selectedOption === "پیک" ? "تحویل پیک" : "آماده برداشت حضوری",
    number: 3,
  },
];

const Stepper = ({ currentStep, progress, selectedOption }: StepperProps) => {
  return (
    <div className="w-[328.23px] h-[54px]">
      <div className="flex flex-row-reverse justify-center items-center gap-3">
        {StepsToReceive(selectedOption).map((s, index) => (
          <div
            className="flex flex-row-reverse justify-center items-center gap-3"
            key={index}
          >
            {/* numbers of step */}
            <div
              className={`${
                index < currentStep
                  ? "bg-key-colors-primary text-white"
                  : "bg-neutral-neutral90 text-neutral-neutral30"
              } flex justify-center font-bold items-center w-8 h-8 p-2 rounded-rounded-7`}
            >
              {s.number}
            </div>
            {/* progress bar */}
            {index < StepsToReceive(selectedOption).length - 1 && (
              <div className="bg-neutral-neutral80 h-[4px] w-[86px] rounded-full flex flex-row-reverse">
                {index < currentStep - 1 && (
                  <div className="bg-key-colors-primary w-full h-full rounded-full" />
                )}
                {index === currentStep - 1 && (
                  <div
                    className="bg-key-colors-primary h-full rounded-full"
                    style={{ width: `${progress}%` }} // Dynamic width based on current step
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse mt-2 relative">
        {StepsToReceive(selectedOption).map((s, index) => (
          <p
            className={`text-2xs font-bold absolute ${index < currentStep ? "text-key-colors-primary" : "text-neutral-neutral30"} ${index === 2 && "-left-[6px]"} ${index === 1 && "left-[127px]"} ${index === 0 && "-right-[6px]"}`}
            key={index}
          >
            {s.step}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
