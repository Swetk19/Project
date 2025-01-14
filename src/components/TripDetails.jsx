import React from 'react';

const TripDetails = () => {
  return (
    <div>
      <h2>Trip Details</h2>
      <form>
        <label>
          Date:
          <input type="date" />
        </label>
        <label>
          Order Number:
          <input type="text" />
        </label>
        <label>
          Rate:
          <select>
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default TripDetails;
