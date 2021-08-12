import React from 'react';
import AuthProvider from './contexts/auth';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

export default function App() {
 return (
   <AuthProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
   </AuthProvider>
 );
}