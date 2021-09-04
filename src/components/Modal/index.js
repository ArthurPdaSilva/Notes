import React, {useState} from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import firebase from '../../services/firebaseConnection';
import './modal.css';

export default function Modal({modal, setModal}) {

  const [nameList, setNameList] = useState('');
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  
  function addItens(){
    setList(oldValue => [...oldValue, item]);
    setItem('');
  }

  async function handleDone(){
    if(nameList === '' || list === ''){
      alert('Preencha todos os campos')
    }else{
      await firebase.firestore().collection('list').add({
        nameList: nameList,
        itens: list
      })
    }
  }

 return (
  <div className='modalContainer'>
    <div className='modal'>
      <div className="itensTop">
        <h2>Nova lista</h2>
        <button onClick={() => {setModal(!modal)}}>
          <FiX color='#2B303A' size={30}/>
        </button>
      </div>
      <div className='listaAdd'>
        <input type='text' value={nameList} onChange={(e) => {setNameList(e.target.value)}} placeholder='Qual é o nome da lista?'/>
        <div className="addList">
          <input type='text' value={item} placeholder='Digite o item' onChange={(e) => {setItem(e.target.value)}}/>
          <button className='plusButton' onClick={addItens}><FiPlus color='white' size={30}/></button>
        </div>
        <ul>
          {list.map((item) => {
            return(
              <ul>
                <li key={item} id={item} className='listaValores'>
                  <span>{item}</span>
                  <FiX color='#2B303A' size={20} onClick={() => {
                    setList(list.filter(el => el !== item))
                  }}/>
                </li>
              </ul>
            )
          })}
        </ul>
        <button className='buttonList' onClick={handleDone}>Concluido</button>
      </div>
    </div>
  </div>
 );
}