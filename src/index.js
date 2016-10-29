import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import App from './components/App';
import Home from './components/Home';
import Work from './components/Work';
import Play from './components/Play';
import Contact from './components/Contact';

var destination = document.getElementById('root');

const Root = () => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="work" component={Work} />
        <Route path="play" component={Play} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  )
}

render(<Root />,
  destination
);
