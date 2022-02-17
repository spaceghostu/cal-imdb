import { action, createStore, persist, thunk } from 'easy-peasy';
import { searchMovies } from '../api/movies';

export const moviesStore = createStore(
    persist({
        movies: [],
        favorites: [],
        pending: false,
        error: '',
        totalResults: null,
        setMovies: action((state, payload) => {
            state.movies = payload
        }),
        setTotalResults: action((state, payload) => {
            state.totalResults = payload
        }),
        setPending: action((state, payload) => {
            state.pending = payload
        }),
        setError: action((state, payload) => {
            state.error = payload
        }),
        addToFavorites: action((state, payload) => {
            state.favorites.push(payload)
        }),
        removeFromFavorites: action((state, payload) => {
            state.favorites = state.favorites.filter(i => i.imdbID !== payload)
        }),
        search: thunk(async (actions, payload) => {
            actions.setPending(true)
            try {
                const { Search, totalResults } = await searchMovies(payload)
                actions.setMovies(Search)
                actions.setTotalResults(totalResults)
                actions.setPending(false)
            } catch (error) {
                actions.setPending(false)
                actions.setError(error)
                console.log(error)
            }
        }),
    }, {
        allow: ['favorites']
    })
);