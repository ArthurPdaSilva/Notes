import React, {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import { FiMenu, FiChevronDown, FiChevronUp, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {

  const [displayMenu, setDisplayMenu] = useState(false);
  const {user, signOut} = useContext(AuthContext);  

  return (
    <header>

      <h1>Anotações e TO-DO lists</h1>

      <nav className='user'>
        <ul>
          <li>
            {!displayMenu ? <FiChevronDown  color='#EBF2FA' size={30} onClick={() => {setDisplayMenu(!displayMenu)}}/> : <FiChevronUp  color='#EBF2FA' size={30} onClick={() => {setDisplayMenu(!displayMenu)}}/>}
          </li>
          <li>
            {displayMenu &&
              <ul>
                <li>
                  <Link to='/perfil'>Editar Perfil</Link>
                </li>
                <li>
                  <button onClick={signOut}>Sair</button>
                </li>
              </ul>
            }
          </li>
          <li>@{user.name}</li>
          <li><FiUser color='#EBF2FA' size={30}/></li>
        </ul> 
        
      </nav>
    </header>

  );
}