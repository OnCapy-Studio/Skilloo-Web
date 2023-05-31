import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justifi-content: center;
    align-items: center;
    gap: 2em; 
    padding: 2em;
    background-color: #362d70;
`

const Sections = styled.nav`
    display: flex;
    gap: 2em;

    a {
        color: #fff;
        padding: 0 0 5px 0;
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
        border-bottom: 1px solid #fff;   
    }
`

const Plataforms = styled.nav`
    display: flex;
    align-items: center;
    gap: 1em;

    i {
        color: #b5b5b5;
        font-size: 1.7rem;
        transition: all 0.5s;
    }

    i:hover {
        font-size: 2rem;
        color: #f1f1f1;
    }
`

const Rights = styled.p`
    color: #b5b5b5;
    font-size: 0.8rem;
`

const Footer = ({ sections }) => {
    const socialMedia = [
        {url:'', icon:'uil uil-github'},
        {url:'', icon:'uil uil-instagram'},
    ]
 
    return (
        <footer>
            <Container>
                <Sections>
                    {sections.map((item, index) => (
                        <Link to='' key={index}>{item}</Link>
                    ))}
                </Sections>

                <Plataforms>
                    {socialMedia.map((media, index) => (
                        <Link to={media.url} target='_blank' key={index}>
                            <i className={media.icon}></i>
                        </Link>
                    ))}
                </Plataforms>

                <Rights>
                    ©2023 SKILLOO | All rights reserved to OnCapy Studio
                </Rights>
            </Container>
        </footer>
    )
}

export default Footer