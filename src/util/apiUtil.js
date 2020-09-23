import { apiKey } from '../config';

export const fetchGifs = async searchTerm => {
    // TODO: Write a fetch call to the Giphy API's search endpoint
    const data = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`);
    // const gifObj = await data.json();
    return data;
}