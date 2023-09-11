import React from 'react'
import * as C from "./styles"

import InputLabel from '../../../components/InputLabel'
import MembrosData from './MembrosData'

const Membros = () => {
    const [search, setSearch] = React.useState('')

    const toogle = membro => {
        console.log(membro)
    }

    return (
        <C.Container>
            <C.Filter>
                <InputLabel
                    label=""
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Filtrar membros"
                />
            </C.Filter>
            <C.Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Membros</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {MembrosData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>    
                                <C.Hour className="material-symbols-outlined">
                                    schedule
                                </C.Hour>

                                <C.Edit className="material-symbols-outlined" onClick={toogle(item)}>
                                    edit
                                </C.Edit>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </C.Table>
        </C.Container>
    )
}

export default Membros