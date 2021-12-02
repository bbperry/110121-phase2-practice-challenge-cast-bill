import React from 'react';
import BillCard from './BillCard'

export default function BillCollection({bills, handleAddCast, handleFire }) {
  


  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map(bill=> (
      <BillCard
      key={bill.id}
      bill={bill}
      handleAddCast={handleAddCast}
      handleFire={handleFire}
      />
      ))}
      </div>
    </div>
  );
}
