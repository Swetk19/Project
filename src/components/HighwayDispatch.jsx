import React from 'react';

const HighwayDispatch = () => {
  return (
    <div>
      <h2>Highway Dispatch</h2>
      <form>
        <label>
          Truck:
          <input type="text" />
        </label>
        <label>
          Driver Name:
          <input type="text" />
        </label>
        <label>
          Cost to Carrier:
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default HighwayDispatch;
