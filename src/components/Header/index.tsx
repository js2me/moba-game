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
    menuShowed: boolean,
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
      animateBackground: false,
      menuShowed: false
    };
    this.showHideMenu = this.showHideMenu.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animateBackground: true});
    }, 200);

  }

  showHideMenu(e){
    e.preventDefault();
    this.setState({menuShowed: !this.state.menuShowed})
  }

  render() {
    const currentRouteIsRoot = this.context.router.route.location.pathname == '/';

    return (
      <header className={`header ${currentRouteIsRoot && 'current-page-is-root'} ${this.state.menuShowed && 'menu-showed'}`}>
        <div
          className={`background-header ${this.state.animateBackground && 'animation-triggered'} ${this.state.animateBackground && currentRouteIsRoot && 'trigger-animation'}`}/>

        <div className="header-content">
          <h1 className='title'>
            <span>МЫ</span>
          </h1>
          <button className={`show-routes-button`} onClick={this.showHideMenu}/>
          <div className='routes' onClick={this.state.menuShowed && this.showHideMenu}>
            {!currentRouteIsRoot &&
            <NavLink className='routerLink' exact={true} activeClassName='routerLinkActive' to="/">главная</NavLink>}
            <NavLink className='routerLink' activeClassName='routerLinkActive' to="/about-you">о тебе</NavLink>
            <NavLink className='routerLink' activeClassName='routerLinkActive' to="/about-us">о нас</NavLink>
            <NavLink className='routerLink' activeClassName='routerLinkActive' to="/about-me">обо мне</NavLink>
          </div>
        </div>
      </header>
    );
  }
}




