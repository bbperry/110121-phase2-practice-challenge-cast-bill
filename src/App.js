import React, { useState, useEffect } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  
  const [bills, setBills] = useState([])


  useEffect(() => {
    fetch("http://localhost:8002/bills")
      .then((res) => res.json())
      .then((data) => setBills(data))
  }, []);

  function handleAddCast(casted) {
      setBills(bills.map(bill=> bill.id === casted.id ? {...bill, casted: true} : bill))
  }

  function handleFire(id) {
    setBills(bills.filter(bill => bill.id !== id))
    }

    function handleUnCast(casted) {
      setBills(bills.map(bill=> bill.id === casted.id ? {...bill, casted: false} : bill))
    }

  return (
    <div>
      
      <BillsCast bills={bills.filter(bill => bill.casted)}
      handleUnCast={handleUnCast}
      handleFire={handleFire}
      />

      <BillCollection bills={bills} handleAddCast={handleAddCast} handleFire={handleFire}/>
    </div>
  );
}

// bills={bills.filter(bill => bill.casted)}/>