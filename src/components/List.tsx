import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import { Wrapper } from '../styles/List.styles';

const List: React.FC = () => {

    const {
      isListInDisplay,
      users,
    } = useContext(AppContext);
    return (
    <Wrapper>
      {isListInDisplay && (  
        <div className="listContainer">
          <div className="titleArea">
            <h1>Lista</h1>
          </div>

          <h3>Lista de Clientes</h3>
          <div className="line"></div>
          <div className="inputArea">
            <span>Nome do Cliente</span>
            <input name="name" type="text" onChange={() => {}}/>
          </div>
          <table>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Criado em</th>
            </tr>
            { users.map(user =>(
              <tr key={user.cpf}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>{user.submitDate}</td>
              </tr>
            ))}
            <tr className="last">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      )}
    </Wrapper>
  )
}

export default List