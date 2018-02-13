import * as React from 'react';
import './style.scss';

export namespace App {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class App extends React.Component<App.Props, App.State> {

  render() {
    const { children } = this.props;
    return (
      <div className='normal page-app'>
        {children}
      </div>
    );
  }
}

