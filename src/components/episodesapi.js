import axios from 'axios';

const episodesapi = axios.create({
    baseURL: `https://api.tvmaze.com/shows/6771/episodes`,
})

export default episodesapi;