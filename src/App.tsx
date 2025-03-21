import React, { useState } from "react";
import BillRows from "./components/BillRows";

const bills = [100, 50, 20, 10, 5, 1]; //hardcoded the bills for malaysian ringgit

const App: React.FC = () => {
  // store mult value for each bill
  const [multipliers, setMultipliers] = useState<{ [key: number]: number }>({});

  // update mult on user input
  const handleMultiplierChange = (bill: number, newMultiplier: number) => {
    setMultipliers((prevMultipliers) => ({
      ...prevMultipliers,
      [bill]: newMultiplier, 
    }));
  };

  // calculate the total amount for all the bills * multiplier
  let totalAmount = 0;
  for (const bill of bills) {
    const multiplier = multipliers[bill] || 0; 
    totalAmount += bill * multiplier;
  }

  return (
    <div>
      <h1 className="title">RM Money Counter</h1>
      {bills.map((bill) => (
        <BillRows
          key={bill}
          bill={bill}
          multiplier={multipliers[bill] || 0}
          onMultChange={handleMultiplierChange}
        />
      ))}
      <h2>Total: RM{totalAmount}</h2>
    </div>
  );
};

export default App;
