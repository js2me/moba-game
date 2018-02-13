import * as React from 'react';
import './style.scss';
import {Heart} from '../../components/Heart';

export namespace AboutMe {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class AboutMe extends React.Component<AboutMe.Props, AboutMe.State> {

  render() {
    return (
      <div className='normal page-about-me'>
        <h1 className='title'><span><Heart/><Heart/>Пупс<Heart/></span></h1>
        <p>
          Нормальный парень, который любит свою пупсю :3
        </p>
        <img src="../../assets/about_me/me.jpg" alt=""/>
      </div>
    );
  }
}

