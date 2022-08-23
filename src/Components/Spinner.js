import React, { Component } from 'react'
import Loading_icon from './Spinner-2.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading_icon} alt="loading" width="100px" height="100px"></img>
      </div>
    )
  }
}

export default spinner
