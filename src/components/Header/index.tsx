import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const classNames = require('classnames');

export namespace Header {
  export interface Props {
  }

  export interface State {
    animateBackground: boolean,
    backgroundImageCounter: number
  }
}

export class Header extends React.Component<Header.Props, Header.State> {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
    this.state = {
      backgroundImageCounter: 0,
      animateBackground: false
    }

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animateBackground: true});
    }, 200);

  }


  render() {


    return (
      <header className={`header ${this.context.router.route.location.pathname == '/' && 'current-page-is-root'}`}>
        <div
          className={`background-header ${this.state.animateBackground && 'animation-triggered'} ${this.state.animateBackground && this.context.router.route.location.pathname == '/' && 'trigger-animation'}`}/>

        <div className="header-content">
          <h1 className='title'>
            <span>МЫ</span>
          </h1>
          <div className='routes'>
            {this.context.router.route.location.pathname != '/' &&
            <NavLink className='routerLink' exact={true} activeClassName='routerLinkActive' to="/">главная</NavLink>}
            <NavLink className='routerLink' activeClassName='routerLinkActive' to="/about-you">о тебе</NavLink>
            <NavLink className='routerLink' activeClassName='routerLinkActive' to="/about-you">о нас</NavLink>
            <NavLink className='routerLink' activeClassName='routerLinkActive' to="/about-me">обо мне</NavLink>
          </div>
        </div>
      </header>
    );
  }
}




