import React, {useContext} from 'react';
import { FiSettings } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {AuthContext} from '../../contexts/auth';
import './home.css';

export default function Home() {
  const {signOut} = useContext(AuthContext);

  return (
   <div className="all">
     <Header/>
     <main>
        <div className='top'>
          <h2>Anotações</h2>
          <small>Crie to-do lists ou anotações convencionais</small>
        </div>
        <div className='notes'>
          <div className="container">
            <div className="topContainer">
              <h3>Nome</h3>
              <FiSettings size={20}/>
            </div>
            <ul className="containerItens">
              <li>Teste</li>
              <li>Teste</li>
              <li>Teste</li>
              <li>Teste</li>
              <li>Teste</li>
            </ul>
            <button onClick={() => {}} className='buttonList'>Adicionar novo item</button>
          </div>
        </div>
        {/* <button onClick={signOut}>Sair</button> */}
     </main>
     <Footer/>
   </div>
 );
}