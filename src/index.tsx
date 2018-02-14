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

const aboutYou = () => import(/* webpackMode: "lazy", webpackChunkName: "about-you" */ './containers/AboutYou');
const aboutMe = () => import(/* webpackMode: "lazy", webpackChunkName: "about-me" */ './containers/AboutMe');
const aboutUs = () => import(/* webpackMode: "lazy", webpackChunkName: "about-me" */ './containers/AboutUs');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header/>
        <Switch>
          <Route path="/about-you" component={() => <AsyncComponent
            moduleProvider={aboutYou}/>}/>
          <Route path="/about-me" component={() => <AsyncComponent
            moduleProvider={aboutMe}/>}/>
          <Route path="/about-us" component={() => <AsyncComponent
            moduleProvider={aboutUs}/>}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
