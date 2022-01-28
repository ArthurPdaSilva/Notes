import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {FiUser, FiLock, FiEye, FiEyeOff, FiMail, FiMoreVertical} from 'react-icons/fi';
import {AuthContext} from '../../contexts/auth';
import { Login, LoginContainer, Form, InputGroup } from '../SignIn/stylesLogin.js';
import { FieldCamps, OptionsCamp } from './stylesRegister.js';

export default function SignIn() {

  const {signUp, handlePasswordVisible, typePassword} = useContext(AuthContext);
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Masculino');
  const dados = ["Masculino", 'Feminino', 'Outro'];

  function signUpUser(e){
    e.preventDefault();
    if(firstName !== '' && lastName !== '' && email !== '' && password !== '' && gender !== ''){
      signUp(email, password, `${firstName} ${lastName}`, gender);
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
            <input type='text' placeholder='Primeiro Nome' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          </InputGroup>

          <InputGroup>
            <label>
              <FiUser color='white' size={24}/>
            </label>
            <input type='text' placeholder='Sobrenome' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
          </InputGroup>

          <InputGroup>
            <label>
              <FiMail color='white' size={24}/>
            </label>
            <input type='email' placeholder='user@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
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

          {(gender !== 'masculino' && gender !== 'feminino') && 
            <InputGroup>
              <label>
                <FiMoreVertical color='white' size={24}/>
              </label>
              <input type='text' placeholder='Qual é o seu gênero?' onChange={(e) => setGender(e.target.value)}/>
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