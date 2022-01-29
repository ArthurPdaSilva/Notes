import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import AuthProvider from './contexts/auth';
import GlobalStyle from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

export default function App() {
 return (
   <AuthProvider>
      <BrowserRouter>
        <ToastContainer theme='colored' autoClose={3000}/>
        <GlobalStyle/>
        <Routes/>
      </BrowserRouter>
   </AuthProvider>
 );
}