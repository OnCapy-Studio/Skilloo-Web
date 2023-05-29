import { styled } from 'styled-components';

export const Frame = styled.nav`
    display: grid;
    grid-template-columns: 1fr 5fr;
`

export const SideMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1.5em;
    height: 100vh; 
    background-color: #6A5FB6;

    div {
        display: flex;
        flex-direction: column;
        gap: 2em
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    a {
        color: #FFF;
    }

    a:hover {
        border: none;
        border-bottom: 1px solid #FFF;
        padding: 0 0 3px 0;
    }
`
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

export const Content = styled.main`
    display:flex;
    flex-direction: column;
`

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2em;
`

export const Header = styled.header`
    background-color: #f1f1f1;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #606060;
`