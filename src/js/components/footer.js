import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='images'>
          <a href='https://www.facebook.com/DontShootPDX/'>
            <img src='/images/facebook-icon-black.png'/>
          </a>

          <a href='https://twitter.com/dontshootpdx'>
            <img src='/images/twitter-icon-black.png'/>
          </a>

          <a href='http://dontshootpdx.tumblr.com/'>
            <img src='/images/Tumblr.png'/>
          </a>
        </div>
      </div>
    )
  }
}
