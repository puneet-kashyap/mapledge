import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './App.css';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
