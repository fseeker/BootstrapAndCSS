import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';

function App() {
  
  return (
    <React.Fragment>
    <div className="container-fluid full-height">
    <div className='row'>
      <div className='col-3 menu'>menu</div>
      <div className='col-9 body'>
        <div className='row'>
          <div className='col-12'>
            
            <input type="date"></input>
          </div>
          <div className='col'>two</div>
          <div className='col'>two</div>
          <div className='col'>two</div>
          <div className='col'>two</div>
          <div className='col'>two</div>
          <div className='col'>two</div>
          <div className='col'>two</div>
          <div className='col'>two</div>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
