import React, {useState} from 'react';
import { FiX } from 'react-icons/fi';
import './modal.css';

export default function Modal({modal, setModal}) {

 const [lista, setLista] = useState([])

 return (
  <div className='modalContainer'>
    <div className='modal'>
      <div class="itensTop">
        <h2>Adicionando nova lista</h2>
        <button onClick={() => {setModal(!modal)}}>
          <FiX color='#2B303A' size={30}/>
        </button>
      </div>
      <div className='listaAdd'>
        <label>Nome da Lista</label>
        <input type='text'/>
        <label>Afazeres</label>
        <input type='text'/>
        <button className='buttonList'>Adicionar item</button>
        <ul>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
        </ul>
      </div>
      <button className='buttonList'>Concluido</button>
    </div>
  </div>
 );
}