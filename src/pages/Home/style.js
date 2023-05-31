import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        background-color: #FFF;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    width: 100%;
    max-width: 1200px;
    padding: 3em;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 100%;

    div {
        display: flex;
        width: 100%;
    }

    aside {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    li {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    i {
        font-size: 2rem;
    }
`

export const Title = styled.h1`
    color: #3a3a3a;
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 1px;

    @media (max-width:1000px) {
        font-size: 2.5rem;
    }

    @media (max-width:850px) {
        font-size: 1.75rem;
    }
`

export const GroupCard = styled.div`
    gap: 2em;

    @media(max-width:768px) {
        flex-direction: column;
    }
`

export const Card = styled.div`
    flex-direction: column;
    padding: 2em;
    border-radius: 10px;
    background-color: #52488C;
    gap: 2em;   

    h1 {
        width: 50%;
    }

    h2 {
        color: #FFF;
        font-weight: 600;
        font-size: 1.75rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1em; 
    }

    li {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    img {
        width: 16px;
    }

    p {
        width: 100%;
        color: #FFF;
        font-size: 1.2rem;
    }
`

export const Esquilo = styled.img`
    width: 200px;

    @media(max-width:768px) {
        display: none;
    }
`

export const Brasil = styled.img`
    width: 32px;
`

