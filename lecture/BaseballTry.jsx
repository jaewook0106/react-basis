import React, { Component } from 'react';

class BaseballTry extends Component {
  state = {

  }

  render() {
    return (
      <li>
        {this.props.item.try}<br /> {this.props.item.result}
      </li>
    )
  }
}

export default BaseballTry