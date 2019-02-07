import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Content from './Content/Content';

class App extends Component {
  render() {
    const data = [
      { url: "home", title: "Home" },
      { url: "about-us", title: "About us" },
      { url: "services", title: "Services" },
      { url: "portfolio", title: "Portfolio" },
      { url: "contacts", title: "Contacts" }
    ];

    return (
      <div className="App">
        <Nav data={data} />
        <Header data={data[0]} />
        <Content />
      </div>
    );
  }
}

export default App;
