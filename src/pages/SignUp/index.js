import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FiUser, FiLock, FiEye, FiEyeOff, FiMail, FiMoreVertical} from 'react-icons/fi';
import './signup.css';

export default function SignIn() {

 const [firstName, setFirstName] = useState(''); 
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [gender, setGender] = useState('masculino');

 //  Passwords
 const [password, setPassword] = useState('');
 const [typePassword, setTypePassword] = useState('password');

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
        <h1>SignUp</h1>
        
        <form onSubmit={() => {}}>
          <div className="groupInput">
            <label>
              <FiUser color='white' size={24}/>
            </label>
            <input type='text' placeholder='Primeiro Nome' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          </div>

          <div className="groupInput">
            <label>
              <FiUser color='white' size={24}/>
            </label>
            <input type='text' placeholder='Sobrenome' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
          </div>

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

          {(gender !== 'masculino' && gender !== 'feminino') && 
            <div className='groupInput'>
              <label>
                <FiMoreVertical color='white' size={24}/>
              </label>
              <input type='text' placeholder='Qual é o seu gênero?' onChange={(e) => setGender(e.target.value)}/>
            </div>
          }

          <fieldset className='gender'>
            <legend>Sexo</legend>
            <div className="options">
              <input type='radio' name='group' id='masculino' value='masculino' onChange={(e) => setGender(e.target.value)}/>
              <label for='masculino'>Masculino</label>
            </div>
            
            <div className="options">
              <input type='radio' name='group' id='feminino' value='feminino' onChange={(e) => setGender(e.target.value)}/>
              <label for='feminino'>Feminino</label>
            </div>

            <div className="options">
              <input type='radio' name='group' id='outro' value='outro' onChange={(e) => setGender(e.target.value)}/>
              <label for='outro'>Outro</label>
            </div>
          </fieldset>

          <button type='submit' className='buttons'>Cadastrar</button>
        </form>

        <hr/>

        <Link to='/' className='buttons'>Já possui uma conta?</Link>
      </div>
   </div>
 );
}