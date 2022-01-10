import React from "react";
import { Link } from 'react-router-dom';

//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            //checks if clickable is true and allows movie image to be clickable
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie-thumb" />
            </Link>
        ) : (
            //otherwise, user can only see the image and can't click on it
            <Image src={image} alt="movie-thumb" />
        )}
    </div>
);

export default Thumb;
