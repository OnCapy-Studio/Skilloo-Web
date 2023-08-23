// src/pages/Gestao/Membros.jsx
import React from "react"
import { styled } from 'styled-components';

import SideMenu from '../../components/SideMenu'
import Header from '../../components/Header'
import Content from "../../components/Content";
import  "../../Reset.css";

export const Frame = styled.main`
    display: flex;
    flex-direction: column;
`

const Membros = () => {
    return (
        <Frame>
            <SideMenu/>
            <Header/>
            <Content/>
        </Frame>
    )
}

export default Membros