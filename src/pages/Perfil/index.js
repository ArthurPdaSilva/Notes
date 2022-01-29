import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import { FiUpload } from 'react-icons/fi';
import Header from '../../components/Header';
import avatar from '../../assets/avatar.png';
import { ButtonAdd, Container } from '../Home/stylesHome';
import { Profile, FormUser, Avatar, InputDesativado } from './stylesProfile';
// import './perfil.css';

export default function Perfil() {
  
  const {user, setUser, storageUser} = useContext(AuthContext);
  //Se tiver user, retorne o mesmo 
  const [nome, setNome] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  return (
    <Container>
      <Header/>
      <Profile>
        <h1>Meu Perfil</h1>
        <FormUser onSubmit={() => {}}>

          <Avatar>
            <span>
              <FiUpload color="#FFF" size={25} />
            </span>
            <input type='file' accept='image/*' onChange={() => {}}/>
            {avatarUrl == null ?
                <img src={avatar} alt="Foto de perfil do usuario" />
                :
                <img src={avatarUrl} alt="Foto de perfil do usuario" />}
          </Avatar>

          <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
          <InputDesativado value={email} disabled={true}/>

          <ButtonAdd type='submit'>Salvar</ButtonAdd>
        </FormUser>
      </Profile>
    </Container>
  );
}