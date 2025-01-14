import React from 'react';

const CustomerDetails = () => {
  return (
    <div>
      <h2>Customer Details</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Phone:
          <input type="tel" />
        </label>
        <label>
          Address:
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default CustomerDetails;
