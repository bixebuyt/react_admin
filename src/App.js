import React, { Component } from 'react';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Aside />
          <Content />
      </div>
    );
  }
}

export default App;
