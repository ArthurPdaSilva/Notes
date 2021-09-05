import React, {useEffect, useState, useContext} from 'react';
import { FiSettings } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import firebase from '../../services/firebaseConnection';
import './home.css';

export default function Home() {
  
  const [modal, setModal] = useState(false);
  const [lista, setLista] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    async function loadNotes(){
      await firebase.firestore().collection('list').get().then((snapshot) => {
        updateState(snapshot)
      })
    }
    loadNotes()
  }, [updateState, user.uid])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function updateState(snapshot){
    let lista = []
    snapshot.forEach((doc) => {
      lista.push({
        idUser: doc.data().idUser,
        nameList: doc.data().nameList,
        itens: doc.data().itens
      })
    })

    setLista(lista.filter((item) => item.idUser === user.uid))

  }

  return (
   <div className="all">
     <Header/>
     <main>
        <div className='top'>
          <h2>Anotações</h2>
          <small>Crie to-do lists ou anotações convencionais</small>
        </div>  
        <div className='notes'>
          {lista.map((item) => {
            return(
              <div key={item.nameList} className="container">
                
                <div className="topContainer">
                  <h3>{item.nameList}</h3>
                  <FiSettings size={20}/>
                </div>
                
                <ul className="containerItens">
                  {item.itens.map((values) => {
                    return(
                      <li key={values}>{values}</li>
                    )
                  })}
                </ul>

                <button className='buttonList'>Adicionar novo item</button>
              </div>)
          })}     
        </div>
     </main>

     <Footer modal={modal} setModal={setModal}/>  
     {modal && (
       <Modal modal={modal} setModal={setModal}/>
     )}
   </div>
 );
}