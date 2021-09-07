import React, {useState, useRef, useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import { FiPlus, FiX } from 'react-icons/fi';
import firebase from '../../services/firebaseConnection';
import './modal.css';

export default function Modal({modal, setModal}) {

  const [nameList, setNameList] = useState('');
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const {user} = useContext(AuthContext)
  const field = useRef(null);
  
  function addItens(){
    setList(oldValue => [...oldValue, item]);
    field.current.focus();
    setItem('');
  }

  async function handleDone(){
    if(nameList === '' || list === ''){
      alert('Preencha todos os campos');
      return;
    }else{
      await firebase.firestore().collection('lists').doc(nameList).set({
        idUser: user.uid,
        nameList: nameList,
        itens: list,
      }).then(() => {
        alert('Lista cadastrada com sucesso')
        setModal(!modal)
      }).catch((error) => console.log(error))
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
          <input type='text' value={item} ref={field} placeholder='Digite o item' onChange={(e) => {setItem(e.target.value)}}/>
          <button className='plusButton' onClick={addItens}><FiPlus color='white' size={30}/></button>
        </div>
        <ul>
          {list.map((item) => {
            return(
              <ul key={item}>
                <li className='listaValores'>
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