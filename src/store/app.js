import { action } from 'easy-peasy';

const appModel = {
    searchQuery: '',
    pageNumber: 0,
    setSearchQuery: action((state, payload) => {
        state.searchQuery = payload
    }),
    setPageNumber: action((state, payload) => {
        state.pageNumber = payload
    }),
}

export default appModel