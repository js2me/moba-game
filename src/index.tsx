import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { AsyncComponent } from './utils/AsyncComponentLoader';
import { Header } from './components/Header/index';
import './style.scss';

const store = configureStore();
const history = createBrowserHistory();

// const playground = () => import(/* webpackMode: "lazy-once", webpackChunkName: "app-playground" */ './containers/Playground');
const settings = () => import(/* webpackMode: "lazy-once", webpackChunkName: "app-settings" */ './containers/Settings');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <div className='header-background'/>
        <Header/>
        <div className='page-content-divider'/>
        <Switch>
          {/*<Route path="/" exact={true} component={() => <AsyncComponent*/}
            {/*moduleProvider={playground}/>}/>*/}
          <Route path="/settings" component={() => <AsyncComponent
            moduleProvider={settings}/>}/>
          {/*<Route path="/game" component={() => <AsyncComponent*/}
            {/*moduleProvider={playground}/>}/>*/}
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
