import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='wrapper'>
            <h1>Fun Food</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form>
              <input type='text' name='username' placeholder="Name"/>
              <input type='text' name='currentItem' placeholder="What are you brining?" />
              <button>Add Food</button>
            </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
