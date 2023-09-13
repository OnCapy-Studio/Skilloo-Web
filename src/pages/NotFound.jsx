import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: 2em 2em 0;
    height: 100%;
    background-color: #f1f1f1;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
`

const NotFound = () => {
    return (
        <Container>
            <Title>Rota não encontrada</Title>
        </Container>
    )
}

export default NotFound