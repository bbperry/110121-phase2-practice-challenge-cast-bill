import React from 'react';
import NewBillCard from './NewBillCard'

export default function BillsCast({bills, handleUnCast, handleFire }) {
  // Your code here

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {bills.map(bill=> (
      <NewBillCard
      key={bill.id}
      bill={bill}
      handleUnCast={handleUnCast}
      handleFire={handleFire}
      />
      ))}
        </div>
      </div>
    </div>
  );
}

