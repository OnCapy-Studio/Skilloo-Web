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
    width: ${(props) => (props.open? '250px' : '55px')};
    height: 100vh;
    background-color: #6a5fb6;
    transition: all 0.2s;
    
    a {
        display: flex;
        align-items: center;
        gap: ${(props) => (props.open? '1.25em' :'0')};
        padding: 1em 3em 1em 1em;
        color:#FFF;
        transition: all 0.2s;

        h1 {
            font-size: 1.2rem;
            font-weight: 100;
            display: ${(props) => (props.open? 'flex': 'none')};
        }
    }

    a:hover {
        background-color: #524994;
        div {background-color: #CCC4FF;}
    }

    .active {
        background-color: ${(props) => (props.open? 'transparent': '#524994')};
        padding: ${(props) => (props.open? '1em 3em 1em 1em': '1em 2em 1em 1em')} ;
        font-weight: bold;

        div {background-color: #CCC4FF;}
        h1 {font-weight: 600;}
    }
`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    margin: 2em 1em 5em;

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

export const ToggleBtn = styled.span`
    color: #FFF;

    :hover {
        border-radius: 10px;
        background-color: #524994;
    }
`

export const Bar = styled.div`
    position: relative;
    right: 15px;
    width: 10px;
    border-radius:0 5px 5px 0;
    height: 20px;
    transition: all 0.2s;
`

export const Logout = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin: ${(props) => (props.open? '0 1em 1.2em': '0 5px 1.2em')};
    gap: 0.5em;
    font-size: 1.2rem;
    color: #FF1F00;
    background-color: #fff;
    transition: all 0.2s;

    :hover {
        background-color: #FF1F00;
        color: #FFF;
    }

    h1 {
        display: ${(props) => (props.open? 'flex' : 'none')};
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`