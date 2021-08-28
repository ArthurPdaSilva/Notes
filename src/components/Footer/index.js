import React from 'react';

export default function Footer({modal, setModal}) {
 return (
   <footer>
      <button onClick={() => {setModal(!modal)}} className='buttonList'>Adicionar nova lista</button>
   </footer>
 );
}