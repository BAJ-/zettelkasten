import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './components/container';

const App = () => (
  <BrowserRouter>
    <Container />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));