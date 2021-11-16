import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls`,
})

export default api;