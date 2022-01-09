import React from 'react';

//Styles
import { Wrapper, Content } from './Grid.styles'

//react has a default children prop which nest things in that prop
const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)


export default Grid;
