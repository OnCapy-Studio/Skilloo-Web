import React from 'react'
import styled from "styled-components"

export const Label = styled.label`
    font-size: 0.9rem;
    margin: 0 0 5px; 
`

export const Input = styled.input`
    outline: none;
    border: 0;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    padding: 1em;
    font-size: 0.9rem;
    font-family: 'Inter', sans-serif;
    color: #3F3F3F;
    background-color: #CFD7FE;
`

const inputLabel = ({ label, type, value, onChange, placeholder }) => {
    return (
        <div>
            <Label>{label}</Label>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default inputLabel