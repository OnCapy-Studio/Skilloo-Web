// src/pages/HomeGestao/HomeGestao.jsx
import React from "react"

import SideMenu from '../../components/SideMenu'
import Header from '../../components/Header'

import  "../../Reset.css";
import * as C from "./style.js";

const HomeGestao = () => {
    return (
        <C.Frame>
            <SideMenu />

            <C.Content>
                <Header pageTitle="Dashboard"/>
            </C.Content>
        </C.Frame>
    )
}

export default HomeGestao