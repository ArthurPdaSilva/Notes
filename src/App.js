import React from 'react';
import AuthProvider from './contexts/auth';
import GlobalStyle from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

export default function App() {
 return (
   <AuthProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes/>
      </BrowserRouter>
   </AuthProvider>
 );
}