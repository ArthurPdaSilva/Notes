import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import { FiUpload } from 'react-icons/fi';
import Header from '../../components/Header';
import avatar from '../../assets/avatar.png';
import './perfil.css';

export default function Perfil() {
  
  const {user, setUser, storageUser} = useContext(AuthContext);
  //Se tiver user, retorne o mesmo 
  const [nome, setNome] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  return (
    <div className='all'>
      <Header/>
      <div className='perfil'>
        <h1>Meu Perfil</h1>
        <form className='formProfile' onSubmit={() => {}}>
          <label className="label-avatar">
            <span>
              <FiUpload color="#FFF" size={25} />
            </span>
            <input type='file' accept='image/*' onChange={() => {}}/>
            {avatarUrl == null ?
                <img src={avatar} width="250" height="250" alt="Foto de perfil do usuario" />
                :
                <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuario" />}
          </label>

          <label>Nome</label>
          <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
          
          <label>Email</label>
          <input type='text' value={email} disabled={true}/>

          <button type='submit'>Salvar</button>
        </form>
      </div>
    </div>
  );
}