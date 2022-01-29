import React, { useState, useContext, useCallback } from 'react';
import { db } from '../../services/firebaseConnection';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../contexts/auth';
import { FiPlus, FiX } from 'react-icons/fi';
import { ButtonAdd } from '../../pages/Home/stylesHome';
// import './modalEdit.css';
import { AddList, CreateContainer, ItensTop, ListaAdd, ModalComponet } from '../Modal/stylesModal';
import { toast } from 'react-toastify';

export default function ModalEdit({nameItem, setNameItem, modal, setModal}) {

    const [visibleItem, setVisibleItem] = useState(false);
    const [newItem, setNewItem] = useState('');
    const [valueName, setValueName] = useState(nameItem);
    const { list, loading } = useContext(AuthContext);

    // Adicionando itens nas listas
    const addItem = useCallback(() => {
        async function add(){
            let listaItens = list.filter((item) => item.nameList === nameItem);
            let values = listaItens.map((el) => el.itens);
            const hasItem = values[0].find((item) => item === newItem);
            if(hasItem){
                toast.error("Item já se encontra na lista!");
                return;
            }else{
                setVisibleItem(!visibleItem);
                values[0].push(newItem);
                setNewItem('');
                await updateDoc(doc(db, 'lists', nameItem), {
                    itens: values[0]
                })
                loading();
            }
            
        }

        add();
    }, [list, loading, nameItem, newItem, visibleItem])

    const changeList = useCallback(() => {
        async function change(){
            toast.success('Lista Atualizada com sucesso!');
            setValueName('');
            setModal(!modal);
        }

        change();
    }, [modal, setModal])
    

    return (
        <CreateContainer>
            <ModalComponet>
                <ItensTop>
                    <h1>{nameItem}</h1>
                    <button onClick={() => {setModal(!modal)}}>
                    <FiX color='#2B303A' size={30}/>
                    </button>
                </ItensTop>
                <ListaAdd>
                    <AddList>
                        <input type='text' placeholder='Adicionar novo item' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                        <button onClick={addItem}><FiPlus color='white' size={30}/></button>
                    </AddList>       

                    <ButtonAdd onClick={changeList}>Concluir</ButtonAdd>         
                </ListaAdd>
            </ModalComponet>
        </CreateContainer>
    );
}