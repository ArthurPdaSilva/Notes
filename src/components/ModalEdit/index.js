import React, { useState, useContext } from 'react';
import { db } from '../../services/firebaseConnection';
import { updateDoc, doc, getDocs, collection } from 'firebase/firestore';
import { AuthContext } from '../../contexts/auth';
import { FiPlus, FiX } from 'react-icons/fi';
import { ButtonAdd } from '../../pages/Home/stylesHome';
import './modalEdit.css';

export default function ModalEdit({nameItem, setNameItem, modal, setModal}) {

    const [visibleItem, setVisibleItem] = useState(false);
    const [newItem, setNewItem] = useState('');
    const [valueName, setValueName] = useState(nameItem);
    const {list, updateState} = useContext(AuthContext);

    // Adicionando itens nas listas
    async function addItem(){
        let listaItens = list.filter((item) => item.nameList === nameItem);
        let values = listaItens.map((el) => el.itens);
        setVisibleItem(!visibleItem);
        values[0].push(newItem);

        await updateDoc(doc(db, 'lists', nameItem), {
            itens: values[0]
        }).then((snapshot) => {
            updateState(snapshot);
        })

        setNewItem('');
    }

    async function changeList(){
        // Adicionando item na lista
        await updateDoc(doc(db, 'lists', valueName), {
            nameList: valueName
        })

        //Atualizando a lista
        await getDocs(collection(db, 'lists')).then((snapshot) => {
            updateState(snapshot);
        })

        setValueName('');
        setModal(!modal);
    }

    return (
    <div className='modalContainer'>
        <div className="modal">
            <div className="itensTop">
                <h1>{nameItem}</h1>
                <button onClick={() => {setModal(!modal)}}>
                <FiX color='#2B303A' size={30}/>
                </button>
            </div>
            <div className='listContainer'>
                <div className='add'>
                    <input type='text' placeholder='Adicionar novo item' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                    <FiPlus color='white' size={30} onClick={addItem}/>
                </div>       

                <ButtonAdd onClick={changeList}>Concluir</ButtonAdd>         
            </div>
        </div>
    </div>
    );
}