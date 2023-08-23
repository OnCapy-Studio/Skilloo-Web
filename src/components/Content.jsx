import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-size: 2rem;
    color: #FFF;
    background-color: #000;
    grid-area: content;

    p {
        font-size: 10rem;
    }
`

const Content = () => {
    return (
        <Container>
            A tia do vinicius é muito gostosa e <p>Grande</p>
        </Container>
    )
}

export default Content