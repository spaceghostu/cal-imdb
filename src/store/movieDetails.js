import { action, thunk } from 'easy-peasy';
import { getMovieById } from '../api/movies';

const movieDetailsModel = {
    movie: null,
    pending: false,
    error: '',
    set: action((state, payload) => {
        state.movie = payload
    }),
    setPending: action((state, payload) => {
        state.pending = payload
    }),
    setError: action((state, payload) => {
        state.error = payload
    }),
    getMovieById: thunk(async (actions, payload) => {
        actions.setPending(true)
        try {
            const movie = await getMovieById(payload.id)
            actions.set(movie)
            document.title = movie.Title
            actions.setPending(false)
        } catch (error) {
            actions.setPending(false)
            actions.setError(error)
            console.log(error)
        }
    }),
};

export default movieDetailsModel