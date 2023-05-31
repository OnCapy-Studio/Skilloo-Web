// src/Home/Home.jsx
import React from 'react'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import esquilo from '../../assets/img/esquilo.png'
import agilidade from '../../assets/img/agilidade.png'

import '../../Reset.css'
import * as C from "./style.js";

const Home = () => {
    return (
        <>
            <Banner />
            
            <C.Main>
                <C.Container>
                    <C.Title>O que é o Skilloo?</C.Title>
                    <C.Section>
                        <p>
                            É uma aplicação que foi desenvolvido para auxiliar a 
                            gestão escolar e os professores no gerenciamento das atividades 
                            e rotinas escolares.  
                        </p>
                    </C.Section>

                    <C.Background>
                        <C.Title>Nosso objetivo</C.Title>
                        
                        <div>
                            <C.Circle>
                                <img src={agilidade} alt="" />
                            </C.Circle>

                            <C.Circle>
                                <img src={agilidade} alt="" />
                            </C.Circle>

                            <C.Circle>
                                <img src={agilidade} alt="" />
                            </C.Circle>
                        </div>
                        
                    </C.Background>

                    <C.Title>Contato</C.Title>
                    <C.Section2>
                        <ul>
                            <li>
                                <i className='uil uil-envelope'></i>
                                <p>skilloo@gmail.com</p>
                            </li>
                            <li>
                                <i className='uil uil-whatsapp'></i>
                                <p>99 99999-9999</p>
                            </li>
                        </ul>

                        <img src={esquilo} alt="" />
                    </C.Section2>

                </C.Container>
            </C.Main>

            <Footer sections={['O que somos', 'Porque nós', 'Contato']} />
        </>
    )
}

export default Home