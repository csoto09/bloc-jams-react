import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Library from './components/Library';
import Album from './components/Album'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid bg-dark text-white row">
          <div className="col-md-2"> 
            <nav className="navbar-expand-md navbar-dark bg-secondary h-100">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleMenu" aria-controls="navbarToggleMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse nav-pills row sticky-top p-md-5" id="navbarToggleMenu">
                <img src= "/assets/images/bloc_jams_logo.png"alt="Bloc Jams!" />  
                <Link className="nav-item nav-link col-12 text-md-left text-white" to='/'>Home</Link>
                <Link className="nav-item nav-link col-12 text-md-left text-white" to='/library'>Library</Link>
              </div>
            </nav>
          </div>
          <main className='col-md-10 py-md-5'>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
          </main>
      </div>
    );
  }
}

export default App;
