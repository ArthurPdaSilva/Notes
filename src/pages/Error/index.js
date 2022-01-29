import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorContainer } from './stylesError.js';

export default function Error() {

  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history('/');
    }, 5000)
  }, [history])

  return (
    <ErrorContainer>
        <h1>404</h1>
        <p>
          Infelizmente, a página que você está tentando acessar, ela não existe.
          O redirecionaremos para a página inicial será em 5 segundos.
        </p>
    </ErrorContainer>
  );

}