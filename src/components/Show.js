import { render } from '@testing-library/react'
import React, { Component } from 'react'
import api from './api'
import './Show.css';

class Show extends Component {
  state = {
    powerpuffs: [],
  }

  async componentDidMount() {
    const response = await api.get('')

    this.setState({ powerpuffs: response.data })
  }

  render() {
    const { powerpuffs } = this.state

    return (
      <div className='showDiv'>
        {powerpuffs.filter(item => item.show.id === 6771).map((powerpuff) => (
          <li key={powerpuff.show.id}>
            <h1>
              <strong>Show: </strong>
              {powerpuff.show.name}
            </h1>
            <p>{powerpuff.show.summary}</p>
            <img src={powerpuff.show.image.medium} alt="Image alt" />
            
          </li>
        ))}
      </div>
    )
  }
}

export default Show
