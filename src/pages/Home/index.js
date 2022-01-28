import React, {useEffect, useState, useContext} from 'react';
import { FiX } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { db } from '../../services/firebaseConnection';
import { updateDoc, doc, getDocs, deleteDoc, collection } from 'firebase/firestore';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalEdit from '../../components/ModalEdit';
import { Container, MainContainer, Title, Section, ModalContainer, ContainerItens, ButtonAdd, TopContainer, Footer } from'./stylesHome.js';

export default function Home() {
  
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [nameList, setNameList] = useState('');
  const {user, list, updateState} = useContext(AuthContext);

  // Pegando as to-do lists
  useEffect(() => {
    async function loadNotes(){
      await getDocs(collection(db, 'lists')).then((snapshot) => {
        updateState(snapshot);
      })
    }

    loadNotes()
  }, [updateState, user.uid])


  // Removendo um item na lista
  async function deleteItem(idName, item){
    let listaItens = list.filter((item) => item.nameList === idName)
    let values = listaItens.map((el) => el.itens)
    values[0].splice(values[0].indexOf(item), 1)
    
    await updateDoc(doc(db, 'lists', idName), {
      itens: values[0]
    });

    await getDocs(collection(db, 'lists')).then((snapshot) => {
      updateState(snapshot);
    })
  }

  // Deletando a lista
  async function deleteList(list){
    await deleteDoc(doc(db, 'lists', list));

    await getDocs(collection(db, 'lists')).then((snapshot) => {
      updateState(snapshot);
    })
  }

  // Atualizando o modal
  function modalForm(name){
    setNameList(name);
    setModalEdit(!modalEdit);
  }

  return (
    <Container>
      <Header/>

      <MainContainer>
        <Title>
          <h2>Anotações</h2>
          <small>Crie to-do lists ou anotações convencionais / Não faça listas com nomes repetidos!</small>
        </Title> 

        <Section>
          {list !== [] && list.map((item) => {
            return(
              <ModalContainer key={item.nameList}>
                
                <TopContainer>
                  <h3>{item.nameList}</h3>
                  <FiX size={20} alt='Deletando Lista' onClick={() => {deleteList(item.nameList)}}/>
                </TopContainer>
                
                <ContainerItens>
                  {item.itens.map((values) => {
                    return(
                      <li key={values}>{values}<FiX color='#2B303A' size={20} onClick={() => deleteItem(item.nameList, values)}/></li>
                    )
                  })}
                </ContainerItens>
                <ButtonAdd onClick={() => {modalForm(item.nameList)}}>Adicionar Mais</ButtonAdd>
              </ModalContainer>)
          })}     
        </Section>
      </MainContainer>

      

      {modal && (
        <Modal modal={modal} setModal={setModal}/>
      )}

      {modalEdit && (
          <ModalEdit nameItem={nameList} setNameItem={setNameList} modal={modalEdit} setModal={setModalEdit}/>
      )}   

      <Footer>
        <ButtonAdd onClick={() => {setModal(!modal)}} className='buttonList'>Adicionar nova lista</ButtonAdd>
      </Footer> 
    </Container>
  );
}