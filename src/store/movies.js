import { action, thunk } from 'easy-peasy';
import { searchMovies } from '../api/movies';

const moviesModel = {
    items: [],
    pending: false,
    error: '',
    totalResults: null,
    set: action((state, payload) => {
        state.items = payload
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
    search: thunk(async (actions, payload) => {
        actions.setPending(true)
        try {
            const { Search, totalResults } = await searchMovies(payload.searchQuery, payload.pageNumber)
            actions.set(Search)
            document.title = 'Search - ' + payload.searchQuery
            actions.setTotalResults(totalResults)
            actions.setPending(false)
        } catch (error) {
            actions.setPending(false)
            actions.setError(error)
            console.log(error)
        }
    }),
};

export default moviesModel