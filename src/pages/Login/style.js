import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        background-color: #FFF;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    gap: 2em;
`

export const Logomarca = styled.img`
    align-self: center;
    width: 200px;
`

export const Title = styled.h1`
    align-self: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 1.5em;
    gap: 2em;
    border-radius: 15px;
`

export const LoginBtn = styled.button`
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 1em;
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;
    background-color: #6A5FB6;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    width: 300px;

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        color: #646464;;
        text-decoration: underline;
    }
`