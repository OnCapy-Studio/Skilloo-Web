import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 2em 3em;
    background-color: #524994;
    grid-area: header;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
`

const Header = ({pageTitle}) => {
    return (
        <HeaderContainer>
            <Title>{pageTitle}</Title>
        </HeaderContainer>
    )
}

export default Header;