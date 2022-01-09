import React from "react";

import RMDBLogo from '../../images/movieinfo-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

//with parentheses, automatically returns JSX
const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='movieinfo-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;