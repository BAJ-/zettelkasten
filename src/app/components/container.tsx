import * as React from 'react';
import { Navigation } from './navigation';
import { Stage } from './stage';

export class Container extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div>
        <Navigation />
        <Stage />
      </div>
    )
  }
}