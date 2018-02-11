import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import {Link, NavLink} from 'react-router-dom';
import * as style from './style.css';
import {Action} from 'redux-actions';

export namespace Header {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <header className={style.header}>
        <h1 className={style.title}>MOBA</h1>
        <div className={style.routes}>
          <NavLink className={style.routerLink} exact={true} activeClassName={style.routerLinkActive} to="/">game</NavLink>
          <NavLink className={style.routerLink} activeClassName={style.routerLinkActive} to="/settings">settings</NavLink>
        </div>
      </header>
    );
  }
}
