import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/readinglist' component={ReadingList} />
        </div>
      </Router>
    );
  }
}

export default App;
