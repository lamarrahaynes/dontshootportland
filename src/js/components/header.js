import React, {Component} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.highlight = this.highlight.bind(this);
    this.removeHighlight = this.removeHighlight.bind(this);
    this.state = {
      highlight: '',
      timers: 0
    }
  }

  highlight(e, highlight) {
    if (e) e.preventDefault();
    this.setState({
      highlight,
      timers: this.state.timers + 1
    });
  }

  removeHighlight(e) {
    if (e) e.preventDefault();
    setTimeout(() => {
      if (this.state.timers === 1) {
        this.setState({
          highlight: '',
          timers: 0
        })
      } else {
        this.setState({
          timers: this.state.timers - 1
        })
      }
    }, 500);
  }

  render() {
    const {highlight} = this.state;
    let classes = {
      Home: 'first ',
      About: '',
      Blog: '',
      UpcomingEvents: ''
    };
    _.forEach(
      Object.keys(classes),
      linkName => {
        const className = highlight === linkName ? 'link highlighted' : 'link';
        classes[linkName] += className;
      }
    );

    return (
      <div>
        <div className='logoHolder'>
          <h1>Don't Shoot PDX</h1>
        </div>
        <nav>
          <div className='horizontalLine'></div>
          <div className='topLinks'>
            <div id='Home' className={classes.Home} onMouseEnter={(e) => {this.highlight(e, 'Home')}} onMouseLeave={this.removeHighlight}>
              <Link to='/'> Home </Link>
            </div>
            <div id='About' className={classes.About} onMouseEnter={(e) => {this.highlight(e, 'About')}} onMouseLeave={this.removeHighlight}>
              <Link to='/about'> About us</Link>
            </div>
            <div id='Blog' className={classes.Blog} onMouseEnter={(e) => {this.highlight(e, 'Blog')}} onMouseLeave={this.removeHighlight}>
              <Link to='/blog'> Blog</Link>
            </div>
            <div id='UpcomingEvents' className={classes.UpcomingEvents} onMouseEnter={(e) => {this.highlight(e, 'UpcomingEvents')}} onMouseLeave={this.removeHighlight}>
              <Link to='/upcoming_events'> Upcoming events</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}