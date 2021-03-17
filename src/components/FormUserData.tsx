import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

import { DropDownContainer, DropDownContainerDouble, DropDownHeader, DropDownList, DropDownListContainer, ListItem, Wrapper } from '../styles/FormUserData.styles';

import Input from './Input';

const FormUserData: React.FC = () => {

  const {
    isRegisterInDisplay,
    isStateOpen,
    selectedStateOption,
    isCityOpen,
    selectedCityOption,
    isMonthOpen,
    selectedMonthOption,
    isYearOpen,
    selectedYearOption,
    optionsState,
    optionsCity,
    optionsMonth,
    optionsYear,
    togglingState,
    togglingCity,
    togglingMonth,
    togglingYear,
    onOptionStateClicked,
    onOptionCityClicked,
    onOptionMonthClicked,
    onOptionYearClicked,
    handleChange,
    submitUser,
  } = useContext(AppContext);
  
  return (
    <Wrapper>
      {isRegisterInDisplay &&(
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
                  {selectedStateOption !== '' ? (
                    <DropDownHeader onClick={togglingState} style={{color: '#445566'}}>
                      {selectedStateOption}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                    </DropDownHeader>
                  ): (
                    <DropDownHeader onClick={togglingState}>
                      {"Selecione o Estado"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                    </DropDownHeader>
                  )}
                  
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
                  {selectedCityOption !== '' ? (
                    <DropDownHeader onClick={togglingCity} style={{color: '#445566'}}>
                      {selectedCityOption}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                    </DropDownHeader>
                  ): (
                    <DropDownHeader onClick={togglingCity}>
                      {"Selecione a Cidade"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                    </DropDownHeader>
                  )}
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
          <h3>Forma de Pagamento</h3>
          <div className="line"></div>
          <div className="radioArea">
            <label className="container">
              <input type="radio" checked name="radio"/>
              <span className="checkmark"></span>
              <p>Cartão de Crédito</p>
            </label>
            <label className="container">
              <input type="radio" name="radio"/>
              <span className="checkmark"></span>
              <p>Boleto Bancário</p>
            </label>
          </div>
          <div className="FormUserPayment">
            <div className="formPaymentArea">
              <div className="inputArea">
                <span>Nome no Cartão</span>
                <input name="cardName" type="text" onChange={handleChange} placeholder="Nome impresso no cartão"/>
              </div>
              <div className="inputArea">
                <span>Data de Expiração</span>
                <div className="dateArea">
                  <DropDownContainerDouble>
                    {selectedMonthOption !== '' ? (
                      <DropDownHeader onClick={togglingMonth} style={{color: '#445566'}}>
                        {selectedMonthOption}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                      </DropDownHeader>
                    ): (
                      <DropDownHeader onClick={togglingMonth}>
                        {"Mês"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                      </DropDownHeader>
                    )}
                    
                    {isMonthOpen && (
                      <DropDownListContainer>
                        <DropDownList>
                          {optionsMonth.map(option => (
                            <ListItem onClick={onOptionMonthClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                          ))}
                        </DropDownList>
                      </DropDownListContainer>
                    )}
                  </DropDownContainerDouble>
                  <DropDownContainerDouble>
                    {selectedYearOption !== '' ? (
                      <DropDownHeader onClick={togglingYear} style={{color: '#445566'}}>
                        {selectedYearOption}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                      </DropDownHeader>
                    ): (
                      <DropDownHeader onClick={togglingYear}>
                        {"Ano"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#445566" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> 
                      </DropDownHeader>
                    )}
                    
                    {isYearOpen && (
                      <DropDownListContainer>
                        <DropDownList>
                          {optionsYear.map(option => (
                            <ListItem onClick={onOptionYearClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                          ))}
                        </DropDownList>
                      </DropDownListContainer>
                    )}
                  </DropDownContainerDouble>
                </div>
              </div>
              <div className="inputArea">
                <span>Número do Cartão</span>
                <Input name="cardNumber" mask="cardNumber" onChange={handleChange} placeholder="5555 5555 5555 5555"/>
              </div>
              <div className="inputArea">
                <span>Código de Segurança</span>
                <Input name="cardSecurityCode" mask="cardSecurityCode" onChange={handleChange} placeholder="XXX"/>
              </div>
            </div>
          </div>
          <div className="submitArea">
            <p className="debitMessage">Seu cartão será debitado em R$49,00</p>
            <button onClick={() => submitUser()}>Realizar Matrícula</button>
            <small>Informações seguras e criptografadas</small>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default FormUserData;