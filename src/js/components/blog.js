import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Blog extends Component {
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
        <div className="post">
          <h3>Example blog post </h3>
          <p>{fillerText}</p>
        </div>
        <div className="post">
          <h3>Example blog post </h3>
          <p>{fillerText}</p>
        </div>
      </div>
    );
  } 
}
