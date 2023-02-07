import React  from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


const RangeField = ({price,setPrice,min,max}) => {

    

  return (
    <>
        <InputRange
        maxValue={max}
        minValue={min}
        value={price}
        onChange={value => setPrice(value)} 
        />
    </>
  )
}

export default RangeField