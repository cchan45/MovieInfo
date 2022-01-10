import React, { useState, useEffect } from 'react';

//API
import API from '../API';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import HeroImage from './HeroImage';
import Grid from './Grid'
import Thumb from './Thumb';
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

//all react components have a capitial first letter 
//use curly brackets if you are returning logic
const Home = () => {

    const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();

    console.log(state)

    if (error) return <div>Something went wrong ....</div>

    return (
        <>
            {!searchTerm && state.results[0] ? (
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
        ) : null}

        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumb
                key={movie.id}
                clickable
                image={
                    movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                />
            ))}
        </Grid>
        {loading && <Spinner />}
        {/* checks if the page is less than the total pages (tells us that we want to show the "load More" Button) */}
        {/* and if we are not currently loading anything */}
        {state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={() => setIsLoadingMore(true)} />
        )}
        </>

    )
}

export default Home
