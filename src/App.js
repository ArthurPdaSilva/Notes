import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

export default function src() {
 return (
   <BrowserRouter>
      <Routes/>
   </BrowserRouter>
 );
}