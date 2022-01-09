import React from "react";

//Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

//skip "return" statement if you are returning JSX
//a prop is something you can send into a component and have it be changed dynamically
//can only change if it re-renders and if a new prob is sent
const HeroImage = ({ image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;
