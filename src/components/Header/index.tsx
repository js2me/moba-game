import * as React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './style.scss';
const classNames = require('classnames');

export namespace Header {
  export interface Props {
  }
}

export class Header extends React.Component<Header.Props> {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
  }


  render() {
    return (
      <header className={`header ${this.context.router.route.location.pathname == '/' && 'current-page-is-root'}`}>
        <h1 className='title'>MOBA</h1>
        <div className='routes'>
          <NavLink className='routerLink' exact={true} activeClassName='routerLinkActive' to="/">game</NavLink>
          <NavLink className='routerLink' activeClassName='routerLinkActive' to="/settings">settings</NavLink>
        </div>
      </header>
    );
  }
}


