import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Library from './components/Library';
import Album from './components/Album'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
        <aside className="col-lg-3 menu">
          <nav className="nav nav-pills flex-column flex-sm-row">
            <Link className="btn nav-item nav-link" to='/'>Landing</Link>
            <Link className="btn nav-item nav-link" to='/library'>Library</Link>
          </nav>
        </aside>
        <main className="col-lg-9">
            <img src= "/assets/images/bloc_jams_logo.png"alt="Bloc Jams!" />
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
        </main>
        </div>
      </div>
    );
  }
}

export default App;
