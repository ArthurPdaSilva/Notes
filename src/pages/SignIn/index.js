import React, { useState, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { FiLock, FiEye, FiEyeOff, FiMail, FiXCircle } from 'react-icons/fi';
import { Login, LoginContainer, Form, InputGroup } from './stylesLogin.js';

export default function SignIn() {
  
  const {login, handlePasswordVisible, typePassword} = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');


  const signIn = useCallback((e) => {
    e.preventDefault();
    if(email !== '' && password !== ''){
      login(email.trim(), password.trim());
    }
  }, [email, login, password]);

  return (
    <Login>
      <LoginContainer>
        <h1>Login</h1>
        
        <Form onSubmit={signIn}>
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
              {typePassword === 'text' ? <FiEye color='white' size={24}/> : <FiEyeOff color='white' size={24}/>}
            </button>
          </InputGroup>

          <button type='submit'>Login</button>
        </Form>

        <Link to='/signup'>Não possui uma conta?</Link>
      </LoginContainer>
    </Login>
  );
}