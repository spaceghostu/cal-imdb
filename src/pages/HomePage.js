import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const movies = useStoreState(state => state.movies)
    const searchMovies = useStoreActions((actions) => actions.searchMovies)
    useEffect(() => {
        searchMovies('Fight')
    }, [])
    return (
        <>
            <div>HomePage</div>
            <Link to='/details'>Details</Link>
            {movies.map((movie, index) => (
                <div key={index}>{movie.Title}</div>
            ))}
        </>
    )
}
