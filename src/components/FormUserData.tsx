import React, { useState, useCallback } from 'react';

import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem, Wrapper } from '../styles/FormUserData.styles';
import DownArrow from '../assets/icons/chevron-down.svg'

import Input from './Input';

interface Usuario {
  name: string,
  email: string,
  cpf: string,
  address: string;
  state: string;
  cep: string;
  city: string;
}

const FormUserData: React.FC = () => {
  const[usuario, setUsuario] = useState<Usuario>({} as Usuario)
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [selectedStateOption, setSelectedStateOption] = useState('');
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCityOption, setSelectedCityOption] = useState('');

  const optionsState = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",];
  const optionsCity =["Betim","Belo Horizonte", "Contagem", "Ibitité"] 

  const togglingState = () => setIsStateOpen(!isStateOpen);
  const togglingCity = () => setIsCityOpen(!isCityOpen);

  const onOptionStateClicked = (value: string) => () => {
    setSelectedStateOption(value);
    setIsStateOpen(false);
    setUsuario({
      ...usuario,
      state: value
    });
  };

  const onOptionCityClicked = (value: string) => () => {
    setSelectedCityOption(value);
    setIsCityOpen(false);
    setUsuario({
      ...usuario,
      city: value
    });
  };
  
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }, [usuario])
  
  return (
    <Wrapper>
      <div className="FormUserData">
        <div className="titleArea">
          <h1>Cadastro</h1>
        </div>
        <div className="formUserArea">
          <div className="inputArea">
            <span>Nome</span>
            <input name="name" type="text" onChange={handleChange}/>
          </div>
          <div className="inputArea">
            <span>Email</span>
            <input name="email" type="email" onChange={handleChange}/>
          </div>
          <div className="inputArea">
            <span>CPF</span>
            <Input name="cpf" mask="cpf" onChange={handleChange} placeholder="111.111.111-01"/>
          </div>
          <div className="inputArea">
            <span>Endereço</span>
            <input name="address" type="text" placeholder="Rua, Número e Bairro" onChange={handleChange}/>
          </div>
          <div className="inputArea">
            <span>Estado</span>
              <DropDownContainer>
                <DropDownHeader onClick={togglingState}>
                  {selectedStateOption || "Selecione o Estado"}
                  </DropDownHeader>
                {isStateOpen && (
                  <DropDownListContainer>
                    <DropDownList>
                      {optionsState.map(option => (
                        <ListItem onClick={onOptionStateClicked(option)} key={Math.random()}>
                            {option}
                        </ListItem>
                      ))}
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
          </div>
          <div className="inputArea">
            <span>CEP</span>
            <Input name="cep" mask="cep" onChange={handleChange} placeholder="22.222-000"/>
          </div>
          <div className="inputArea">
            <span>Cidade</span>            
              <DropDownContainer>
                <DropDownHeader onClick={togglingCity}>
                  {selectedCityOption || "Selecione a Cidade"}
                </DropDownHeader>
                {isCityOpen && (
                  <DropDownListContainer>
                    <DropDownList>
                      {optionsCity.map(option => (
                        <ListItem onClick={onOptionCityClicked(option)} key={Math.random()}>
                            {option}
                        </ListItem>
                      ))}
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
          </div>        
        </div>
        <button onClick={() => console.log(usuario)}>Salvar</button>
      </div>
    </Wrapper>
  );
}

export default FormUserData;