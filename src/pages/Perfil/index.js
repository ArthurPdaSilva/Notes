import React, {useState, useContext, useCallback} from 'react';
import { AuthContext } from '../../contexts/auth';
import { FiUpload } from 'react-icons/fi';
import Header from '../../components/Header';
import avatar from '../../assets/avatar.png';
import { ButtonAdd, Container } from '../Home/stylesHome';
import { Profile, FormUser, Avatar, InputDesativado } from './stylesProfile';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../services/firebaseConnection';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';

export default function Perfil() {
  const {user, setUser, storageUser} = useContext(AuthContext);
  const [nome, setNome] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  const handleChange = useCallback(() => {
    async function update(){
      const storageRef = ref(storage, `images/${user.uid}/${imageAvatar.name}`);
      await uploadBytesResumable(storageRef, imageAvatar).then(() => {
        toast.success("Imagem enviada com sucesso");
      }).catch(error => console.log(error));

      await getDownloadURL(storageRef).then(async(url) => {
        let urlFoto = url;
        await updateDoc(doc(db, 'users', user.uid), {
            avatarUrl: urlFoto,
            name: nome
        }).then(() => {
            let data = {
                ...user,
                name: nome,
                avatarUrl: urlFoto
            }

            setUser(data);
            storageUser(data);
        });
    })
    }

    update();
  }, [imageAvatar, nome, setUser, storageUser, user])
  
  const handleUpdate = useCallback((e) => {
    e.preventDefault();
    async function updatePerfil(){
      if(imageAvatar === null && nome !== ''){
        await updateDoc(doc(db, 'users', user.uid), {
          name: nome
        }).then(() => {
          let data = {
            ...user,
            name: nome
          }

          setUser(data);
          storageUser(data)
        }).catch(error => console.log(error));
        toast.success('Trocado com sucesso!');
      }else if(nome !== '' && imageAvatar !== null){
        handleChange();
        toast.success('Trocado com sucesso!');
      }else{
        toast.info('Faça alguma coisas ou volte para a home!');
      }
    }

    updatePerfil();
  }, [handleChange, imageAvatar, nome, setUser, storageUser, user])

  const handleFile = useCallback((e) => {
    function handleFile(){
      if(e.target.value[0]){
          const image = e.target.files[0];
          if(image.type === 'image/jpeg' || image.type === 'image/png'){
              setImageAvatar(image);
              setAvatarUrl(URL.createObjectURL(image));
          }else{
            toast.info('Envie uma imagem válida!');
            return null;
          }
      }
    }

    handleFile();
  }, [])

  return (
    <Container>
      <Header/>
      <Profile>
        <h1>Meu Perfil</h1>
        <FormUser onSubmit={handleUpdate}>

          <Avatar>
            <span>
              <FiUpload color="#FFF" size={25} />
            </span>
            <input type='file' accept='image/*' onChange={handleFile}/>
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