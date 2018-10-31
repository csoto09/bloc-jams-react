import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Library from './components/Library';
import Album from './components/Album'
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
        <aside className="col-sm">
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </aside>
        <main className="col-lg ">
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
