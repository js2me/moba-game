import * as React from 'react';
import './style.scss';

export namespace AboutYou {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class AboutYou extends React.Component<AboutYou.Props, AboutYou.State> {

  render() {
    const { children } = this.props;
    return (
      <div className='normal page-about-you'>
        {children}
      </div>
    );
  }
}

