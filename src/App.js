import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Register from './components/register/Register';
import './App.css';
import Contact from './components/contact/Contact';
import AboutUs from './components/aboutUs/AboutUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
