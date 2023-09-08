import styled from "styled-components"

export const Screen = styled.div`
    display: flex;

    main {
        width: 100%;
    }
`

export const Menu = styled.aside`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 100vh;
    background-color: #6a5fb6;
    grid-area: sidenav; 
    
    a {
        display: flex;
        align-items: center;
        gap: 1.25em;
        padding: 1em;
        color:#FFF;
        transition: all 0.2s;

        span {
            width: 20px;
        }

        h1 {
            font-size: 1.2rem;
            font-weight: 100;
        }
    }
    
    a:hover {
        background-color: #FFF;
        color: #6a5fb6;
        font-weight: 600;
    }
`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    margin: 1.2em 1em 5em;

    a {
        padding: 0;
    }

    img {
        width: 100%;
    }

    a:hover {
        background-color: initial;
    }
`   

export const Bars = styled.span `
    position: relative;
    left: 5px;
    color: #FFF;
`

export const Logout = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0 1em 1.2em;
    gap: 0.5em;
    font-size: 1.2rem;
    color: #FF1F00;
    background-color: #fff;

    :hover {
        background-color: #FF1F00;
        color: #FFF;
    }
`