import { action, computed } from 'easy-peasy';

const favoritesModel = {
    items: [],
    ids: computed(state => state.items.map(f => f.imdbID)),
    add: action((state, payload) => {
        state.items.push(payload)
    }),
    remove: action((state, payload) => {
        state.items = state.items.filter(i => i.imdbID !== payload)
    }),
};

export default favoritesModel