import * as React from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/note">Note</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}