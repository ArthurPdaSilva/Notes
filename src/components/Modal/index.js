import React, { useState, useRef, useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/auth';
import { FiPlus, FiX } from 'react-icons/fi';
import { db } from '../../services/firebaseConnection';
import { doc, setDoc } from 'firebase/firestore';
import { ButtonAdd } from '../../pages/Home/stylesHome';
import { CreateContainer, ModalComponet, ItensTop, ListaAdd, AddList, ListaValores } from './stylesModal';
import { toast } from 'react-toastify';

export default function Modal({modal, setModal}) {

  const [nameList, setNameList] = useState('');
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const { user, loading } = useContext(AuthContext)
  const field = useRef(null);

  const addItens = useCallback(() => {
    function add(){
      //Verificando se a lista já tem esse valor:
      const hasItem = list.find((name) => name === item);
      if(hasItem){
        toast.error("Item já se encontra na lista!");
      }else{
        setList(oldValue => [...oldValue, item]);
      }
      
      field.current.focus();
      setItem('');
    }

    add();
  }, [item, list])

  const handleDone = useCallback(() => {
    async function handle(){
      if(nameList === '' || list === ''){
        toast.error('Preencha todos os campos');
        return;
      }else{
        toast.success('Lista cadastrada com sucesso!');
        await setDoc(doc(db, 'lists', nameList), {
          idUser: user.uid,
          nameList: nameList,
          itens: list,
        }).then(() => {
          setModal(!modal);
        }).catch((error) => {
          toast.error(error);
          return;
        })
        
        loading();
        
      }
    }

    handle();

  }, [list, loading, modal, nameList, setModal, user.uid])

  return (
    <CreateContainer>
      <ModalComponet>
        <ItensTop>
          <h2>Nova lista</h2>
          <button onClick={() => {setModal(!modal)}}>
            <FiX color='#2B303A' size={30}/>
          </button>
        </ItensTop>
        <ListaAdd>
          <input type='text' value={nameList} onChange={(e) => {setNameList(e.target.value)}} placeholder='Qual é o nome da lista?'/>
          <AddList>
            <input type='text' value={item} ref={field} placeholder='Digite o item' onChange={(e) => {setItem(e.target.value)}}/>
            <button onClick={addItens}><FiPlus color='white' size={30}/></button>
          </AddList>
          <ul>
            {list.map((item) => {
              return(
                <ul key={item}>
                  <ListaValores>
                    <span>{item}</span>
                    <FiX color='#2B303A' size={20} onClick={() => {
                      setList(list.filter(el => el !== item))
                    }}/>
                  </ListaValores>
                </ul>
              )
            })}
          </ul>
          <ButtonAdd onClick={handleDone}>Concluido</ButtonAdd>
        </ListaAdd>
      </ModalComponet>
    </CreateContainer>
  );
  }