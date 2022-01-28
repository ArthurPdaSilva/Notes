import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './error.css';

export default function Error() {

  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history('/');
    }, 5000)
  }, [history])

  return (
    <div className='errorContainer'>
        <h1>ERROR</h1>
        <p>
          Infelizmente, a página que você está tentando acessar, ela não existe.
          O redirecionaremos para a página inicial será em 5 segundos.
        </p>
    </div>
  );

}