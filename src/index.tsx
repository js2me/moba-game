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

// const playground = () => import(/* webpackMode: "lazy-once", webpackChunkName: "app-playground" */ './containers/Playground');
const settings = () => import(/* webpackMode: "lazy-once", webpackChunkName: "app-settings" */ './containers/Settings');

const root = document.getElementById('root');
root.addEventListener('scroll', (e) => {
  let pageBackground = document.querySelector('.page-background') as any;
  const {classList, scrollTop, scrollHeight} = e.target as any;
  if (pageBackground) {
    console.log('scrollY:',Math.round(((scrollTop) / scrollHeight) * 100));
    if(Math.round(((scrollTop) / scrollHeight) * 100) > 55){
      pageBackground.style.setProperty('background-position-y','100%');
    }else{
      pageBackground.style.removeProperty('background-position-y');
    }
  }
  classList[scrollTop > (window.document.body.clientHeight / 1.7) && 'add' || 'remove']('scrolled-down');
});


// setTimeout(()=>{
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <div className='page-background'/>
        <Header/>
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
  root
);
// },2000000);
