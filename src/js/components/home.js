import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing` +
      ` elit, sed do eiusmod tempor incididunt ut labore et dolore magna` +
      ` aliqua. Ut enim ad minim veniam, quis nostrud exercitation` +
      ` ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis` +
      ` aute irure dolor in reprehenderit in voluptate velit esse cillum` +
      ` dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat` +
      ` non proident, sunt in culpa qui officia deserunt mollit anim id` +
      ` est laborum.`

    return (
      <div>
        <img className='mainImage' src='https://scontent-sea1-1.xx.fbcdn.net/hphotos-xlt1/t31.0-8/12314693_1682324985387978_4609122362248191423_o.jpg'/>

        <p>
          {fillerText}
        </p>

        <Link to='/about'> Learn more </Link>
      </div>
    )
  }
}