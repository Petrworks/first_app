import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className='Main'>
        {this.props.name} have a {this.props.pet}
      </div>
    );
  }
}
