import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import {configureStore} from './store';
import {AsyncComponent} from './utils/AsyncComponentLoader';
import {Header} from './components/Header/index';
import './style.scss';

const store = configureStore();
const history = createBrowserHistory();

const app = () => import(/* webpackMode: "lazy", webpackChunkName: "app-root" */ './containers/App');
const playground = () => import(/* webpackMode: "lazy", webpackChunkName: "app-playground" */ './containers/Playground');
const settings = () => import(/* webpackMode: "lazy", webpackChunkName: "app-settings" */ './containers/Settings');

const root = ((root: any) => {
  let rootIsScrolledDown = false;

  root.addEventListener('scroll', (e) => {
    let pageBackground = document.querySelector('.page-background') as any;
    const {classList, scrollTop, scrollHeight} = e.target as any;
    if (pageBackground) {
      if (Math.round(((scrollTop) / scrollHeight) * 100) > 55) {
        pageBackground.style.setProperty('background-position-y', '100%');
      } else {
        pageBackground.style.removeProperty('background-position-y');
      }
    }
    let isScrolledDown = scrollTop > (window.document.body.clientHeight / 1.7);
    if (rootIsScrolledDown != isScrolledDown) {
      rootIsScrolledDown = isScrolledDown;
      classList[isScrolledDown && 'add' || 'remove']('scrolled-down');
    }
  });

  return root;
})(document.getElementById('root'));

setTimeout(() => {

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <div className='page-background'/>
          <h2 className='page-description'>ORU</h2>
          <Header/>
          <Switch>
            <Route path="/" exact={true} component={() => <AsyncComponent
            moduleProvider={app}/>}/>
            <Route path="/settings" component={() => <AsyncComponent
              moduleProvider={settings}/>}>
            </Route>
            <Route path="/game" component={() => <AsyncComponent
              moduleProvider={playground}/>}>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>,
    root
  );
  setTimeout(() => {
    document.querySelector('.lw').remove();
  }, 2500);
}, 1000);
