import React from 'react'
import * as C from "./styles"

import InputLabel from '../../../components/InputLabel'

const Membros = () => {
    const [search, setSearch] = React.useState('')



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

                <C.Tags>
                </C.Tags>
            </C.Filter>
            <C.Table>
                <thead>
                    <tr>
                        <th>
                            Membros:
                        </th>
                        <th>
                            Ações:
                        </th>
                    </tr>
                </thead>
                <tbody>  
                    <tr>
                        <td>
                            <div>
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                                Pessoa da Silva
                            </div>
                        </td>
                        <td>
                            <div>
                                <C.Hour className="material-symbols-outlined">
                                    schedule
                                </C.Hour>

                                <C.Edit className="material-symbols-outlined">
                                    edit
                                </C.Edit>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </C.Table>
        </C.Container>
    )
}

export default Membros