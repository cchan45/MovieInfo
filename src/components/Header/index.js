import React from "react";
import { Link } from 'react-router-dom'

import RMDBLogo from '../../images/movieinfo-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

//with parentheses, automatically returns JSX
const Header = () => (
    <Wrapper>
        <Content>
            <Link to={'/'}>
                <LogoImg src={RMDBLogo} alt='movieinfo-logo' />
            </Link>
            <a href="https://www.themoviedb.org/">
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </a>
        </Content>
    </Wrapper>
);

export default Header;