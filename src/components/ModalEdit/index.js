import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import { FiPlus, FiX } from 'react-icons/fi';
import firebase from '../../services/firebaseConnection';
import './modalEdit.css';

export default function ModalEdit({nameItem, setNameItem, modal, setModal}) {

    const [visibleItem, setVisibleItem] = useState(false);
    const [newItem, setNewItem] = useState('');
    const [valueName, setValueName] = useState(nameItem);
    const {lista, setLista, updateState} = useContext(AuthContext);

    // Adicionando itens nas listas
    async function addItem(){
        let listaItens = lista.filter((item) => item.nameList === nameItem)
        let values = listaItens.map((el) => el.itens)
        setVisibleItem(!visibleItem)
        values[0].push(newItem)

        await firebase.firestore().collection('lists').doc(nameItem).update({
            itens: values[0]
        })
        await firebase.firestore().collection('lists').get().then((snapshot) => {
            updateState(snapshot)
        })  

        setNewItem('');
    }

    async function changeList(){

        // Pegando o doc para trocar o nome do mesmo e do nome da lista
        await firebase.firestore().collection('lists').doc(nameItem).get().then((doc) => {
            if(doc && doc.exists){
                let data = doc.data()
                firebase.firestore().collection('lists').doc(valueName).set(data);
            }
        })
        
        // Adicionando o nome da lista
        await firebase.firestore().collection('lists').doc(valueName).update({
            nameList: valueName
        })

        // Apagando a o doc com nome antigo
        await firebase.firestore().collection('lists').doc(nameItem).delete();
        


        await firebase.firestore().collection('lists').get().then((snapshot) => {
            updateState(snapshot)
        })  

        setValueName('');
        setModal(!modal);
    }

    return (
    <div className='modalContainer'>
        <div className="modal">
            <div className="itensTop">
                <h1>Editando {nameItem}</h1>
                <button onClick={() => {setModal(!modal)}}>
                <FiX color='#2B303A' size={30}/>
                </button>
            </div>
            <div className='listContainer'>
                <label>Nome da Lista:</label>
                <input type='text' value={valueName} onChange={(e) => setValueName(e.target.value)} placeholder='cu'/>

                <div className='add'>
                    <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                    <FiPlus color='white' size={30} onClick={addItem}/>
                </div>       

                <button className='buttonList' onClick={changeList}>Concluir</button>         
            </div>
        </div>
    </div>
    );
}