import styled from 'styled-components';

export const Wrapper = styled.div`
  div.FormUserData{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
  }

  div.FormUserData div.titleArea {
    background: #EFF4F9; 
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.FormUserData div.titleArea h1{
    color: #445566;
    font-size: 3.5rem;
    margin: 0;
  }

  div.FormUserData div.formUserArea {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4.25rem;
  }

  div.FormUserData div.formUserArea {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.25rem;
  }

  div.FormUserData div.formUserArea div.inputArea:nth-child(1),
  div.FormUserData div.formUserArea div.inputArea:nth-child(2),
  div.FormUserData div.formUserArea div.inputArea:nth-child(3){
    grid-column: span 2;
  }

  div.FormUserData div.formUserArea div.inputArea{
    display: flex;
    flex-direction: column;
  }

  div.FormUserData div.formUserArea div.inputArea span{
    color: #445566;
    font-weight: 700;
  }

  div.FormUserData div.formUserArea div.inputArea input{
    background: #EFF4F9;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  }

  div.FormUserData div.formUserArea div.inputArea input::placeholder{
    font-weight: 900;
    color: rgba(68,85,102,0.25)
  }
  
`

export const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
`;
export const DropDownHeader = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EFF4F9;
  border: none;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 20px;
  font-size: 13.3333px;
  font-weight: 900;
  color: rgba(68,85,102,0.25);
  margin-top: 0;
  user-select: none;
  :hover{
    color: #fff;
  }
`;
export const DropDownListContainer = styled.div`
  
`;
export const DropDownList = styled.ul`
  cursor: pointer;
  padding: 0;
  margin: 0;
  padding-left: 0em;
  background: #EFF4F9;
  border: 1px solid rgba(187, 204, 221, 0.4);
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 13.3333px;
  font-weight: 500;
  user-select: none;
  width: 12.5em;

  position: absolute;
  z-index: 2;
  &:first-child {
    padding-top: 0.2em;
  }
`;
export const ListItem = styled.li`
  position: relative;
  transition: all 0.3s ease;
  list-style: none;
  text-align: center; 
  padding-bottom: 0.6em;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  :hover{
    color: #fff;
  }
`;