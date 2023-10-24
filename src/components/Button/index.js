import React from 'react';
import { ButtonContainer } from "./styled";

const Button = ({label, onClick}) => {


    return (
     
      <ButtonContainer onClick ={ onClick } type="button">
       {label}
      </ButtonContainer>
      

      
      
      
    );
  }
  
  export default Button ;