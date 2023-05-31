// src/Home/Home.jsx
import React from 'react'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import esquilo from '../../assets/img/esquilo.png'
import check from '../../assets/img/check.png'
import brasil from '../../assets/img/brasil.png'

import '../../Reset.css'
import * as C from "./style.js";

const Home = () => {
    const fds = [
        {
            user: "Professor",
            functionalities: [
                'Horário personalizado', 
                'Anotações de aula', 
                'Reservar laboratórios', 
                'Contatar suporte'
            ]
        },
        {
            user: "Coordenador",
            functionalities: [
                'Adicionar professor',
                'Atualizar horário',
                'Gerenciar salas',
                'Realizar suporte'
            ]
        }
    ]

    return (
        <>
            <Banner />
            
            <C.Main>
                <C.Container>
                    <C.Section>
                        <C.Title>Entre com o seu tipo de usuário:</C.Title>
                        <C.GroupCard>
                            {fds.map(obj => (
                                <C.Card>
                                    <h2>{obj.user}</h2>
                                    <ul>
                                        {obj.functionalities.map((item, index) => (
                                            <li key={index}>
                                                <img src={check} alt="" />
                                                <p>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </C.Card>
                            ))}
                        </C.GroupCard>
                    </C.Section>
                    
                    <C.Section>
                        <C.Title>Contato:</C.Title>

                        <aside>
                            <ul>
                                <li>
                                    <C.Brasil src={brasil} alt="" />
                                    <p>São Paulo - SP, Brasil</p>
                                </li>
                                <li>
                                    <i className='uil uil-whatsapp'></i>
                                    <p>99 99999-9999</p>
                                </li>
                                <li>
                                    <i className='uil uil-envelope'></i>
                                    <p>skilloo@gmail.com</p>
                                </li>
                            </ul>

                            <C.Esquilo src={esquilo} alt="" />
                        </aside>
                    </C.Section>
                </C.Container>
            </C.Main>

            <Footer sections={['Tipos de usuários', 'Contato']} />
        </>
    )
}

export default Home