import React from 'react';
import {TopNavBar} from './TopNavBar';
import  { Main } from './Main';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <HttpsRedirect>
        <Main/>
      </HttpsRedirect>
    </div>
  );
}

export default App;
