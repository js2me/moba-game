import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { AsyncComponent } from './utils/AsyncComponentLoader';
import { Header } from './components/Header/index';
import './style.css';

const store = configureStore();
const history = createBrowserHistory();

const app = () => import(/* webpackMode: "lazy-once", webpackChunkName: "app-root" */ './containers/App');
const settings = () => import(/* webpackMode: "lazy-once", webpackChunkName: "app-settings" */ './containers/Settings');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={() => <AsyncComponent
            moduleProvider={app}/>}/>
          <Route path="/settings" component={() => <AsyncComponent
            moduleProvider={settings}/>}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
