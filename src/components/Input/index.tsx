import React, { InputHTMLAttributes, useCallback } from 'react';

import { cep, cpf, cardNumber, cardSecurityCode } from './masks';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "cpf" | "cardNumber" | "cardSecurityCode";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix,...props}) => {
  
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if(mask === 'cep'){
      cep(e);
    }
    if(mask === 'cpf'){
      cpf(e);
    }
    if(mask === 'cardNumber'){
      cardNumber(e);
    }
    if(mask === 'cardSecurityCode'){
      cardSecurityCode(e);
    }

  }, [mask])

  return(
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp}/>
    </div>
  );
}

export default Input;