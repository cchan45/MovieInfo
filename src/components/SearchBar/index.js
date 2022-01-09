import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from '../../images/search-icon.svg'

//Styles
import { Wrapper, Content } from './SearchBar.styles'

//controlled component is a component that react controls
//we use useState because we need to create a controlled component
//means we are going to have our input field, but it's controlled by react
//the value in the input field is going to be based on the state
const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);


    useEffect(() => {

        //dont trigger a re-render and run the rest of the logic
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

         return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                type='text' 
                placeholder='Search Movie'
                onChange={event => setState(event.currentTarget.value)} 
                value={state}
                />

            </Content>
        </Wrapper>
    )
}

export default SearchBar;