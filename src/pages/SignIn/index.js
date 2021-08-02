import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FiLock, FiEye, FiEyeOff, FiMail} from 'react-icons/fi';
import './signin.css';

export default function SignIn() {

 const [email, setEmail] = useState('')

 //  Passwords
 const [password, setPassword] = useState('');
 const [typePassword, setTypePassword] = useState('password')

 function handlePasswordVisible(){
   if(typePassword === 'password'){
     setTypePassword('text');
   }else{
     setTypePassword('password');
   }
 }

 return (
   <div className='login'>
      <div className="loginContainer">
        <h1>Login</h1>
        
        <form onSubmit={() => {}}>
          <div className="groupInput">
            <label>
              <FiMail color='white' size={24}/>
            </label>
            <input type='email' placeholder='user@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="groupInput">
            <label>
              <FiLock color='white' size={24}/>
            </label>
            <input type={typePassword} placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required/>
            <button onClick={handlePasswordVisible} type='button'>
              {typePassword === 'text' ? <FiEye color='black' size={24}/> : <FiEyeOff color='black' size={24}/>}
              
            </button>
          </div>
          <button type='submit' className='buttons'>Login</button>
        </form>

        <hr/>

        <Link to='/signup' className='buttons'>Não possui uma conta?</Link>
      </div>
   </div>
 );
}