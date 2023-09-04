import React from "react"
import { Routes, Route } from "react-router-dom";
import { styled } from 'styled-components';
import "../../Reset.css";

import SideMenu from '../../components/SideMenu'
import Header from '../../components/Header'

import Membros from "./Membros";
import Horarios from "./Horarios";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

const HomeGestao = () => {
    return (
        <Container>
            <SideMenu/>
            <Header/>

            <Routes>
                <Route path="/" element={<Membros/>}/>
                <Route path="/horarios" element={<Horarios/>}/>
            </Routes>
        </Container>
    )
}

export default HomeGestao
