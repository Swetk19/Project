import React from 'react';

const ShipperDetails = () => {
  return (
    <div>
      <h2>Shipper Details</h2>
      <form>
        <label>
          Shipper Name:
          <input type="text" />
        </label>
        <label>
          Pickup Date & Time:
          <input type="datetime-local" />
        </label>
        <label>
          Commodity:
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default ShipperDetails;
