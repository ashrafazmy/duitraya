import React, { ChangeEvent } from 'react';


interface BillRowProps{
    bill: number;
    multiplier: number;
    onMultChange: (bill: number, newMult: number) => void;
}
const BillRows: React.FC<BillRowProps> = ({bill,multiplier,onMultChange}) => {

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        let numberVal = parseInt(value) || 0;

        onMultChange(bill, numberVal); // Update the multiplier
    }

  return (
    <div>
        <span>RM{bill}</span> * <span> </span>
        <input 
        type='number'
        value={multiplier}
        min={0}
        onChange={handleInputChange} >
        </input>
    </div>
  );
};

export default BillRows;
