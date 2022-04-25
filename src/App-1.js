import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';

function App() {
  
  return (
    <React.Fragment>
    <div className="App App1 App2" active="onetwothree">
    <div className='c1 c4'>
        c1
        <div className='c2'>
          c2
          <div className='c3'>
            c3 - Hello
          </div>
        </div>
      </div>
    </div>
    <div className="App App1" active="false">
      Hello
    </div>
    <p className="App App1" active="true">
      Hello
    </p>
    <div className="App">
      <div className='c1 c4'>
        c1
        <div className='c2'>
          c2
          <div className='c3'>
            c3 - Hello
          </div>
        </div>
      </div>
      <div className='c1'>
        c1
        <div className='c2'>
          c2
          <div className='c3'>
            c3 - Hello
          </div>
        </div>
      </div>
      <div className='c1'>
        c1
        <div className='c2'>
          c2
          <div className='c3'>
            c3 - Hello
          </div>
        </div>
      </div>
      <a href='www.google.com' target="_blank">google</a><br/>
      <a href='www.bing.com' target="_blank">bing</a><br/>
      <input type="text" />
      <button class="btn btn-primary">Click Me</button>
      <Button
        color="primary"
      >
        Click Me
      </Button>
    </div>

    <div className='list'>
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
      </div>

    </React.Fragment>
  );
}

export default App;
