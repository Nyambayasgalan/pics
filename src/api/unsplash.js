import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NyBYz0zhMxYMG8ztLrlmDgvFb2TKzSaT_JW5MFXnk2I'
    }
});