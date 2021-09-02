import React, {useState} from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import './modal.css';

export default function Modal({modal, setModal}) {

 const [lista, setLista] = useState([])

 return (
  <div className='modalContainer'>
    <div className='modal'>
      <div class="itensTop">
        <h2>Nova lista</h2>
        <button onClick={() => {setModal(!modal)}}>
          <FiX color='#2B303A' size={30}/>
        </button>
      </div>
      <div className='listaAdd'>
        <input type='text' placeholder='Qual é o nome da lista?'/>
        <div className="addList">
          <input type='text' placeholder='Digite o item'/>
          <button className='plusButton'><FiPlus color='white' size={30}/></button>
        </div>
        <ul>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
        </ul>
        <button className='buttonList'>Concluido</button>
      </div>
    </div>
  </div>
 );
}