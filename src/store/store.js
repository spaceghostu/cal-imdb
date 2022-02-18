import { action, createStore, persist, thunk } from 'easy-peasy';
import moviesModel from './movies'
import favoritesModel from './favorites'
import movieDetailsModel from './movieDetails';

const store = createStore(
    persist({
        searchQuery: '',
        pageNumber: 1,
        viewMode: 'list',
        toggleViewMode: action((state) => {
            state.viewMode = state.viewMode === 'list' ? 'cards' : 'list'
        }),
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
        movieDetails: movieDetailsModel,
        favorites: persist(favoritesModel, {
            allow: ['items'],
            storage: 'localStorage'
        }),
    }, {
        allow: ['viewMode']
    })
);

export default store