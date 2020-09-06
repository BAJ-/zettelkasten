import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Container } from './components/container';
import './styles.css';

const App = () => (
  <HashRouter>
    <Container />
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));