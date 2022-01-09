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
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(searchTerm)

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

    // Initial render and search
    useEffect(() => {
        //cleans the state before searching
        setState(initialState)
        //gets the movies if/if not user inputs a search term in the search bar
        fetchMovies(1, searchTerm)
    }, [searchTerm])

    return { state, loading, error, setSearchTerm, searchTerm }
}