import React from 'react';
import {GlobalStyle} from './global-styles';
import Home from '../src/containers/Home'


export default function App() {
  return (
    <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>
  );
}

