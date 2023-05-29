import { styled, createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        background-color: #FFF;
    }
`

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 2em 3em;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;    

    .container {
        display: flex;
        flex-direction: row;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #6A5FB6;
    border-radius: 0 0 80px 80px;
`

export const Navigation= styled.nav`
    display: flex;
    align-items: center;
    gap: 1em;

    a {
        font-size: 1.25rem;
        font-weight: 500;
        color: #FFF;
        transition: all 0.5s;
    }

    a:hover {
        border: none;
        border-bottom: 1px solid #fff;
        padding: 0 0 3px 0;
    }
`

export const GroupTitleButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3em;
`

export const Title = styled.h1`
    color: #FFF;
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

export const Subtitle = styled.h2`
    color: #E3E3E3;
    font-size: 1.25rem;
    letter-spacing: 1px;

    @media (max-width: 1000px) {
        font-size: 1.15rem;
    }

    @media (max-width:850px) {
        font-size: 0.9rem;
    }
`

const shakeAnimation = keyframes`
    0% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-10deg);
    }
`;

export const AboutUsBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 0.5em 1em;
    width: 200px;
    color: #6A5FB6;
    background-color: #FFF;
    font-size: 1.25rem;
    font-weight: 700;
    transition: all 0.5s;

    a {
        display: flex;
        justify-content: space-between;
    }

    img {
        transition: transform 1s;
    }

    &:hover {
        transform: scale(1.1);

        img {
            animation: ${shakeAnimation} 1s ease-in-out infinite;
        }
    }
`

export const Icon = styled.img`
    transition: transform 0.3s ease-in-out;
`;

export const LogOutBtn = styled.button`
    outline: none;
    border: none;
    padding: 5px 20px;
    color: #6A5FB6;
    font-size: 1em;
    font-weight: 900;
    background-color: #FFF;
    border-radius: 10px;
`

export const Logotipo = styled.img`
    @media (max-width:1000px) {
        width: 200px;
    }
`