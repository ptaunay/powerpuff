import React, { Component } from 'react';
import episodesapi from './episodesapi';
import './Episodes.css';

class Episodes extends Component {
  state = {
    episodes: [],
  }

  async componentDidMount() {
    const response = await episodesapi.get('')

    this.setState({ episodes: response.data })
  }

  render() {
    const { episodes } = this.state

    return (
      <div className='episodesDiv'>
        {episodes.filter(episode => episode.image).map((episode) => (
          <li key={episode.id}>
            <h1>
              <strong>Episode: </strong>
              {episode.name}
            </h1>
            <p>{episode.summary}</p>
            <img src={episode.image.medium} alt="Image alt" />
          </li>
        ))}
      </div>
    )
  }
}

export default Episodes
