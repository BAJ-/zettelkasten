import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './components/page';

const App = () => (
  <BrowserRouter>
    <Page />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));