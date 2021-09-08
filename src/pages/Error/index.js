import React from 'react';
import { useHistory } from 'react-router-dom';
import './error.css';

export default function Error() {
 
  const history = useHistory();
  
  setTimeout(() => {
    history.replace('/')
  }, 5000)
 
  return (
   <div className='errorContainer'>
       <h1>ERROR</h1>
       <p>
         Infelizmente, a página que você está tentando acessar, ela não existe. O redirecionaremos para a página inicial em 5 segundos.
       </p>
   </div>
 );
}