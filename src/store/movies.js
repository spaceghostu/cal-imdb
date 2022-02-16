import { action, createStore, thunk } from 'easy-peasy';
import { searchMovies } from '../api/movies';

export const moviesStore = createStore({
    movies: [],
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
    searchMovies: thunk(async (actions, payload) => {
        actions.setPending(true)
        try {
            const res = await searchMovies(payload);
            const { Search, totalResults } = await res.json();
            actions.setMovies(Search)
            actions.setTotalResults(totalResults)
            actions.setPending(false)
        } catch (error) {
            actions.setPending(false)
            actions.setError(error)
            console.log(error)
        }
    }),
});