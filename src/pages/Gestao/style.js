import { styled } from 'styled-components';

export const Frame = styled.nav`
    display: grid;
    grid-template-columns: 1fr 5fr;
`

export const Content = styled.main`
    display:flex;
    flex-direction: column;
    background-color: #f1f1f1;
`

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2em;
    background: #f1f1f1;
`

export const Header = styled.header`
    background-color: #f1f1f1;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #606060;
`