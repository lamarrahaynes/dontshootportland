import React, {Component} from 'react';
import About from './components/about';
// import Blog from './components/blog';
// import UpcomingEvents from './components/events';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export {App, Home, About};
// , Blog, UpcomingEvents