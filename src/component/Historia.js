import React, { Component } from 'react'

export class Historia extends Component {

  render() {

    const { historia } = this.props;
    return (
      <h1 className='historia'>
        {historia}
      </h1>
    )
  }
}
