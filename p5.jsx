import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";

import './styles/main.css';

import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';

class P5App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="p5-container">
          <Header />
          <div className="toolbar">
            <Link to="/example" className="toolbar-link">Example</Link>
            <Link to="/states" className="toolbar-link">States</Link>
          </div>
          
          <div className="view-container">
            <Route path="/example" component={Example} />
            <Route path="/states" component={States} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <P5App />,
  document.getElementById('reactapp')
);
