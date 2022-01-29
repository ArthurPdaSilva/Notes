import React, { useEffect, useState, useContext, useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { db } from '../../services/firebaseConnection';
import { updateDoc, doc, getDocs, deleteDoc, collection } from 'firebase/firestore';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalEdit from '../../components/ModalEdit';
import { Container, MainContainer, Title, Section, ModalContainer, ContainerItens, ButtonAdd, TopContainer, Footer } from'./stylesHome';

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
  const deleteItem = useCallback((idName, item) => {
    async function deleteProp(idName, item){
      let listaItens = list.filter((item) => item.nameList === idName)
      let values = listaItens.map((el) => el.itens)
      values[0].splice(values[0].indexOf(item), 1)
      
      await updateDoc(doc(db, 'lists', idName), {
        itens: values[0]
      });
    }

    deleteProp(idName, item);

  }, [list]);

  // Deletando a lista
  const deleteList = useCallback((list) => {
    async function deleteListName(list){
      await deleteDoc(doc(db, 'lists', list));
      alert('Lista apagada com sucesso!');
    }

    deleteListName(list);
  }, []);

  // Atualizando o modal
  const modalForm = useCallback((name) => {
    setNameList(name);
    setModalEdit(!modalEdit);
  }, [modalEdit])

  return (
    <Container>
      <Header/>

      <MainContainer>
        <Title>
          <h2>Anotações</h2>
          <small>Crie to-do lists ou anotações convencionais</small>
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