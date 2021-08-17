import React, {useContext} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {AuthContext} from '../../contexts/auth';
import './home.css';

export default function Home() {
  const {signOut} = useContext(AuthContext);

  return (
   <div>
     <Header/>
     <main>
        <div className='top'>
          <h2>Anotações</h2>
          <small>Crie to-do lists ou anotações convencionais</small>
        </div>
        {/* <button onClick={signOut}>Sair</button> */}
     </main>
     <Footer/>
   </div>
 );
}