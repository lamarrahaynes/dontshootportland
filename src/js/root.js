import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Home, About, Blog, UpcomingEvents} from './app';

class Root extends Component {
  render() {
    console.log(App);
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path='about' component={About}/>
          <Route path='blog' component={Blog}/>
          <Route path='upcoming_events' component={UpcomingEvents}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));