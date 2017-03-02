import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import StationChaveaux from './components/StationChaveaux';
import StationVincennes from './components/StationVincennes';
import StationRobespierre from './components/StationRobespierre';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/croix-de-chaveaux" component={StationChaveaux} />
    <Route path="/porte-de-vincennes" component={StationVincennes} />
    <Route path="/robespierre" component={StationRobespierre} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
