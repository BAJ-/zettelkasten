import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './components/container';
import './styles.css';

const App = () => (
  <BrowserRouter>
    <Container />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));