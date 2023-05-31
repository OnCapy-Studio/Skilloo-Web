import { styled, createGlobalStyle, keyframes } from 'styled-components';

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

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3em;
    width: 100%;
    max-width: 1200px;
    padding: 3em;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;

    p {
        width: 600px;
        font-size: 1.5rem;
        text-align: center  ;
    }
`

export const Section2 = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1em;
    width: 100%;

    p {
        font-size: 1.75rem;
        text-align: center  ;
    }

    img {
        width: 200px;
    }

    ul {
        display: flex;
        flex-direction: column;
    }

    li {
        display: flex;
        align-items: center;,
        gap: 1em;
    }

    i {
        font-size: 3rem;
    }

    .title {
        color: #FFF;
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

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 2em;
    border-radius: 80px;
    background-color: #6A5FB6;
    color: #FFF;

    div {
        display: flex;
        justify-content: space-around;
    }

    img {
        object-fit: cover;
        width: 100%;
        max-width: 200px;
    }
`

export const Circle = styled.div`
    backgroud-color: #6A5FB6;
    border-radius: 1000px;
    padding: 1em;
`