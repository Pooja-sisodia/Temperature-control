import React from 'react';
import {useState} from 'react';
import './style.css';

const Temp = () => {
    const initialTemp = 20
    const [temp, setTemp] = useState(initialTemp)
    const [tempColor, setTempColor] = useState("normal")

    const updateTemp = () =>{
      if(temp >= 20 && temp < 30){
        setTempColor("normal")
      }else if(temp >= 30 && temp < 50){
        setTempColor("hot")
      }else if(temp >= 50){
        setTempColor("extremely-hot")
      }
       
    }
    
    const incrTemp = () => {  
      const newTemp = temp + 1
      setTemp(newTemp)
      updateTemp()

    }

    const decrTemp = () => {
      if(temp===20) return;
      const newTemp = temp-1
      setTemp(newTemp)
      updateTemp()
    }

  return (
    <>
    <div className='main_container'>
        <div className={`temp_box ${tempColor}`}><p>{temp}°C</p></div>
        <div className='boxes'>
            <div className='incr_box' onClick={() => incrTemp()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                +
            </div>
            <div className='decr_box' onClick={() => decrTemp()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                -
            </div>
        </div>
     </div>
      
    </>
  )
}

export default Temp
