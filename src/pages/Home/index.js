import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import './home.css';

export default function Home() {
  const {signOut} = useContext(AuthContext);

  return (
   <main>
      <h1>Title of Notes</h1>
      <button onClick={signOut}>Sair</button>
   </main>
 );
}