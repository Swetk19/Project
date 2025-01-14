import React, { useState } from 'react';
import TripDetails from './TripDetails';
import CustomerDetails from './CustomerDetails';
import ShipperDetails from './ShipperDetails';
import HighwayDispatch from './HighwayDispatch';
import StepNavigation from './StepNavigation';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="form-container">
      {currentStep === 1 && <TripDetails />}
      {currentStep === 2 && <CustomerDetails />}
      {currentStep === 3 && <ShipperDetails />}
      {currentStep === 4 && <HighwayDispatch />}

      <StepNavigation
        currentStep={currentStep}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default MultiStepForm;
