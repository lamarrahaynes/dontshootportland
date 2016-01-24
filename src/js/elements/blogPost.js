import React, {Component} from 'react';
import _ from 'lodash';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {expanded: false};
  }

  handleClick(e) {
    if (e) e.preventDefault()
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const {title, text} = this.props;
    let mainText;
    if (this.state.expanded) {
      mainText = (
        <div>
          {_.map(
            text.split('\n'), 
            (paragraph, i) => {
              if (paragraph === '') return paragraph;
              return <p key={i}>{paragraph}</p>
            }
          )}
          <button className="show-hide" onClick={this.handleClick}> Show less <span className='glyphicon glyphicon-chevron-left'></span></button>
        </div>
      );
    } else {
      mainText = (
        <div>
          <p>{text.split('\n')[0]}</p>
          <button className="show-hide" onClick={this.handleClick}> Show more <span className='glyphicon glyphicon-chevron-right'></span></button>
        </div>
      );
    }
    return (
      <div className="post">
        <h3>{title}</h3>
        {mainText}
      </div>
    )
  }
}