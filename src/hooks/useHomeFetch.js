import { useState, useEffect } from 'react';

//API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

//... is ES6 syntax that spreads the movies
//spreads the movies (never mutate the object in react, will cause problems)
export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (err) {
            setError(true)
        }
        setLoading(false);
    };

    // Initial render
    useEffect(() => {
        fetchMovies(1)
    }, [])

    return { state, loading, error}
}