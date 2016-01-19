import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='logoHolder'>
          <h1>Don't Shoot PDX</h1>
        </div>
        <nav>
          <div className='horizontalLine'></div>
          <div className='topLinks'>
            <div className='link first'>
              <Link to='/'> Home </Link>
            </div>
            <div className='link'>
              <Link to='/about'> About us</Link>
            </div>
            <div className='link'>
              <Link to='/blog'> Blog</Link>
            </div>
            <div className='link'>
              <Link to='/upcoming_events'> Upcoming events</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}