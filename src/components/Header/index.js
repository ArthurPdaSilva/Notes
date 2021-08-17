import React from 'react';
import { FiMenu, FiChevronDown, FiUser } from 'react-icons/fi';
import './header.css';

export default function Header() {
 return (
   <header>
       <FiMenu color='#EBF2FA' size={30}/>
       <h1>Notes</h1>
       <div className='user'>
           <FiChevronDown  color='#EBF2FA' size={30}/>
           @User
           <FiUser color='#EBF2FA' size={30}/>
       </div>
   </header>
 );
}