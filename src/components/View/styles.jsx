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
    gap: 1.5em;
    padding: 2em;
    width: 700px;
`

export const TopSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    svg {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`

export const Form = styled.form`
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-height: 500px;
`

export const BottomSection = styled.section`
    display: flex;
`

export const SubmitBtn = styled.button`
    border-radius: 15px;
    border: none;
    outline: none;
    background-color: #6a5fb6;
    color: #fff;
    padding: 1em 1.5em;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
`