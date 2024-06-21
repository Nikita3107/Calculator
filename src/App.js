import React, { useState } from "react";
import styles from "./App.module.css"
import { Display } from "./Components/Display";
import { ButtonsContainer } from "./Components/ButtonsContainer";
function App() {
  const [calVal,setVal]=useState('')
  const onButtonClick=(buttontext)=>{

    if(buttontext==='c'){
setVal('')
    }
    else if(buttontext==='='){
      try{
        const result =eval(calVal)
        setVal (result.toString())
      } catch(error){
        setVal('Error')

      }

    }
    else{
const newVal=calVal+buttontext;
setVal(newVal)
    }
  }
  return (
    <div className={styles.calculator}> <h2>calculator</h2>
      <Display displayVal={calVal}/>
      <ButtonsContainer onButtonClick={(onButtonClick)}/>
    
    </div>
  );
}

export default App;
