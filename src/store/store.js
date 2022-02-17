import { createStore, persist } from 'easy-peasy';
import appModel from './app'
import moviesModel from './movies'
import favoritesModel from './favorites'

const store = createStore({
    app: appModel,
    movies: moviesModel,
    favorites: persist(favoritesModel, {
        allow: ['items']
    }),
});

export default store