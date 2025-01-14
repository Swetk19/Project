import React from 'react';

const StepNavigation = ({ currentStep, onNext, onPrev }) => {
  return (
    <div className="navigation-buttons">
      {currentStep > 1 && <button onClick={onPrev}>Back</button>}
      {currentStep < 4 && <button onClick={onNext}>Next</button>}
      {currentStep === 4 && <button>Finish</button>}
    </div>
  );
};

export default StepNavigation;
