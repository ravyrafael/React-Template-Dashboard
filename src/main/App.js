import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import Layout from '../views/Layout';

function App() {
  return (
    <BrowserRouter forceRefresh={false} >
      <Layout><Routes  /></Layout>
      <div className="app-content">
      
      </div>
    </BrowserRouter >

  );
}

export default App;


