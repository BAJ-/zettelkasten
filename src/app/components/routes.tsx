import * as React from 'react';
import { Route } from 'react-router-dom';

export class Routes extends React.PureComponent<unknown, unknown> {
  public render(): JSX.Element {
    return (
      <>
        <Route path="/" exact component={IndexView} />
        <Route path="/note" exact component={Noteview} />
      </>
    );
  }
}

const Noteview = () => <h1>NoteView</h1>
const IndexView = () => <h1>IndexView</h1>