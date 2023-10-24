import React from 'react';
import { InputContainer, Inputcontet } from "./styled";

const Input = ({value}) => {

    return (
     
      <InputContainer> 
        <Inputcontet disabled value={value}/>
      </InputContainer>
     
      
    );
  }
  
  export default Input;