import { mockResponse } from './mockResponse';

const API_KEY = 'moHSvsXgXRmshqzIK6YfwhVczx3ap1xDEahjsnFJ11Fr40OwpT'
const BASE_URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/'

export async function searchMovies(search, page = '1') {

    const params = { s: search, r: 'json', page }
    const url = new URL(BASE_URL)
    for (const key in params) {
        url.searchParams.append(key, params[key])
    }

    var options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
            useQueryString: true,
        }
    };

    if (process.env.NODE_ENV !== 'production') {
        return mockResponse()
    }

    const res = await fetch(url, options)
    return res.json()
}