import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
    padding: 2em;
    background-color: #FFF;
`

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #606060;
`

const Header = ({pageTitle}) => {
    return (
        <HeaderContainer>
            <Title>{pageTitle}</Title>
        </HeaderContainer>
    );
}

export default Header;