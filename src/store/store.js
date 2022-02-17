import { action, createStore, persist, thunk } from 'easy-peasy';
import moviesModel from './movies'
import favoritesModel from './favorites'

const store = createStore({
    searchQuery: '',
    pageNumber: 1,
    setSearchQuery: action((state, payload) => {
        state.searchQuery = payload
    }),
    setPageNumber: action((state, payload) => {
        state.pageNumber = payload
    }),
    setSearchParams: thunk(async (actions, payload, { getState }) => {
        const state = getState()
        const searchQuery = payload.searchQuery || state.searchQuery
        const pageNumber = payload.pageNumber || state.pageNumber
        actions.setSearchQuery(searchQuery)
        actions.setPageNumber(pageNumber)
        actions.movies.search({ searchQuery, pageNumber })
    }),
    movies: moviesModel,
    favorites: persist(favoritesModel, {
        allow: ['items'],
        storage: 'localStorage'
    }),
});

export default store