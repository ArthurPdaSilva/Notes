import React, {useEffect, useState, useContext} from 'react';
import { FiSettings, FiX } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import ModalEdit from '../../components/ModalEdit';
import firebase from '../../services/firebaseConnection';
import './home.css';

export default function Home() {
  
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [nameList, setNameList] = useState('');
  const {user, lista, setLista, updateState} = useContext(AuthContext);

  // Pegando as to-do lists
  useEffect(() => {
    async function loadNotes(){
      await firebase.firestore().collection('lists').get().then((snapshot) => {
        updateState(snapshot)
      })
    }
    loadNotes()
  }, [updateState, user.uid])


  // Removendo um item na lista
  async function deleteItem(idName, item){
    let listaItens = lista.filter((item) => item.nameList === idName)
    let values = listaItens.map((el) => el.itens)
    values[0].splice(values[0].indexOf(item), 1)
    
    await firebase.firestore().collection('lists').doc(idName).update({
      itens: values[0]
    })
    await firebase.firestore().collection('lists').get().then((snapshot) => {
      updateState(snapshot)
    })
  }

  // Deletando a lista
  async function deleteList(list){

    await firebase.firestore().collection('lists').doc(list).delete()

    await firebase.firestore().collection('lists').get().then((snapshot) => {
      updateState(snapshot)
    })
  }

  // Atualizando o modal
  function modalForm(name){
    setNameList(name)
    setModalEdit(!modalEdit)
  }

  return (
   <div className="all">
     <Header/>
     <main>
        <div className='top'>
          <h2>Anotações</h2>
          <small>Crie to-do lists ou anotações convencionais / Não faça listas com nomes repetidos!</small>
        </div>  
        <div className='notes'>
          {lista !== [] && lista.map((item) => {
            return(
              <div key={item.nameList} className="container">
                
                <div className="topContainer">
                  <h3>{item.nameList}</h3>
                  <FiX size={20} alt='Deletando Lista' onClick={() => {deleteList(item.nameList)}}/>
                </div>
                
                <ul className="containerItens">
                  {item.itens.map((values) => {
                    return(
                      <li key={values}>{values}<FiX color='#2B303A' size={20} onClick={() => deleteItem(item.nameList, values)}/></li>
                    )
                  })}
                </ul>
                <button className='buttonList' onClick={() => {modalForm(item.nameList)}}>Editar</button>
              </div>)
          })}     
        </div>
     </main>

     <Footer modal={modal} setModal={setModal}/>  
     {modal && (
       <Modal modal={modal} setModal={setModal}/>
     )}
     {modalEdit && (
          <ModalEdit nameItem={nameList} setNameItem={setNameList} modal={modalEdit} setModal={setModalEdit}/>
      )}   

   </div>
 );
}