import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {FiUser, FiLock, FiEye, FiEyeOff, FiMail, FiMoreVertical, FiXCircle} from 'react-icons/fi';
import {AuthContext} from '../../contexts/auth';
import { Login, LoginContainer, Form, InputGroup } from '../SignIn/stylesLogin.js';
import { FieldCamps, OptionsCamp } from './stylesRegister.js';

export default function SignIn() {

  const {signUp, handlePasswordVisible, typePassword} = useContext(AuthContext);
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Masculino');
  const dados = ["Masculino", 'Feminino', 'Outro'];

  function signUpUser(e){
    e.preventDefault();
    if(name !== '' && email !== '' && password !== '' && gender !== ''){
      signUp(email.trim(), password.trim(), name.trim(), gender);
    }
  }

  return (
    <Login>
      <LoginContainer>
        <h1>SignUp</h1>
        
        <Form onSubmit={signUpUser}>
          <InputGroup>
            <label>
              <FiUser color='white' size={24}/>
            </label>
            <input type='text' placeholder='Seu nome' value={name} onChange={(e) => setName(e.target.value)} required/>
            <button type='button' onClick={() => setName('')}>
              <FiXCircle color='white' size={24}/>
            </button>
          </InputGroup>

          <InputGroup>
            <label>
              <FiMail color='white' size={24}/>
            </label>
            <input type='email' placeholder='user@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <button type='button' onClick={() => setEmail('')}>
              <FiXCircle color='white' size={24}/>
            </button>
          </InputGroup>

          <InputGroup>
            <label>
              <FiLock color='white' size={24}/>
            </label>
            <input type={typePassword} placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required/>
            <button onClick={handlePasswordVisible} type='button'>
              {typePassword === 'text' ? <FiEye color='#FFF' size={24}/> : <FiEyeOff color='white' size={24}/>}  
            </button>
          </InputGroup>

          {(gender !== 'Masculino' && gender !== 'Feminino') && 
            <InputGroup>
              <label>
                <FiMoreVertical color='white' size={24}/>
              </label>
              <input type='text' placeholder='Qual é o seu gênero?' onChange={(e) => setGender(e.target.value)}/>
              <button type='button' onClick={() => setGender('Masculino')}>
              <FiXCircle color='white' size={24}/>
            </button>
            </InputGroup>
          }

          <FieldCamps>
            <legend>Sexo</legend>
            {dados.map(value => (
              <OptionsCamp key={value}>
                <input type='radio' name='group' id={value} value={value} onChange={(e) => setGender(e.target.value)}/>
                <label htmlFor={value}>{value}</label>
              </OptionsCamp>
            ))}
          </FieldCamps>

          <button type='submit'>Cadastrar</button>
        </Form>

        <Link to='/'>Já possui uma conta?</Link>
      </LoginContainer>
    </Login>
  );
  }