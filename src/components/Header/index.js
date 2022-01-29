import React, {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import { FiChevronDown, FiChevronUp, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HeaderContainer, Menu, FlexivelMenu, DisplayLi, AvatarImagem } from './stylesHeader';

export default function Header() {

  const [displayMenu, setDisplayMenu] = useState(false);
  const {user, deslogar} = useContext(AuthContext);  

  return (
    <HeaderContainer>

      <h1>Anotações e TO-DO lists</h1>

      <Menu>
        <ul>
          <li>
            @{user.name}
          </li>
          <li>
            <Link to='/perfil'>
              {user.avatarUrl === null ? 
              <FiUser color='#EBF2FA' size={30}/> : 
              <AvatarImagem src={user.avatarUrl} alt='imagem perfil'/>}
            </Link>
          </li>
          <li>
            {!displayMenu ? <FiChevronDown  color='#EBF2FA' size={30} onClick={() => {setDisplayMenu(!displayMenu)}}/> : <FiChevronUp  color='#EBF2FA' size={30} onClick={() => {setDisplayMenu(!displayMenu)}}/>}
          </li>
          <DisplayLi>
            {displayMenu &&
              <FlexivelMenu>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/perfil'>Perfil</Link>
                </li>
                <li>
                  <button onClick={deslogar}>Sair</button>
                </li>
              </FlexivelMenu>
            }
          </DisplayLi>
          
        </ul> 
        
      </Menu>
    </HeaderContainer>

  );
}