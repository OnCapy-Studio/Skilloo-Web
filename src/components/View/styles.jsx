import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #0000007d;
`

export const Frame = styled.div`
    background-color: #FFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 2em;
    width: 700px;
`

export const TopSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`

export const Close = styled.button`
    color: #000;
    background-color: transparent;
    border: none;
    outline: none;
`

export const Form = styled.form`
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-height: 500px;
`