import React, {useState} from 'react'
import { Wrapper } from '../styles/Menu.styles';

const Menu: React.FC = () => {
  const [isListInDisplay, setIsListInDisplay] = useState(false);
  const [isRegisterInDisplay, setIsRegisterInDisplay] = useState(true);

  const menuListHandler = () => {
    setIsListInDisplay(true);
    setIsRegisterInDisplay(false);
  }

  const menuRegisterHandler = () => {
    setIsListInDisplay(false);
    setIsRegisterInDisplay(true);
  }
  return (
    <Wrapper>  
      <div className="menuContainer">
        {isListInDisplay && <div className="outCircle"><div className="inCircle"></div></div>}
        <p onClick={menuListHandler}>Lista</p>
        {isRegisterInDisplay && <div className="outCircle"><div className="inCircle"></div></div>}
        <p onClick={menuRegisterHandler}>Cadastro</p>
      </div>
    </Wrapper>
  )
}

export default Menu
