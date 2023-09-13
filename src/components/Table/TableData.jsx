import React, { useState } from 'react'
import * as C from './styles'
import PopUpView from '../View/PopUpView'

const Table = ({head, data, icon}) => {
    const [openView, setOpenView] = useState(false)
    const [viewMemberData, setViewMemberData] = useState(null)

    const toggleView = member => {
        setViewMemberData(member)
        setOpenView(!openView)
    }

    return (
    <>
        <C.Table>
            <thead>
                <tr>
                    {head && head.map(item => (
                        <C.Th>{item}</C.Th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.content.map((item, index) => (
                    <tr key={index}>
                        <C.Td>
                            <div>
                                <C.ScreenIcon 
                                    className="material-symbols-outlined"
                                >
                                    {icon}
                                </C.ScreenIcon>
                                {item.nome}
                            </div>
                        </C.Td>
                        <C.Td>
                            <C.Actions>
                                <C.VisibilityIcon 
                                    className="material-symbols-outlined" 
                                    onClick={() => toggleView(item)}
                                >
                                    visibility
                                </C.VisibilityIcon>

                                <C.DeleteIcon 
                                    className="material-symbols-outlined"
                                >
                                    delete
                                </C.DeleteIcon>
                            </C.Actions>
                        </C.Td>
                    </tr>
                ))}
            </tbody>
        </C.Table>
        
        {openView && <PopUpView memberData={viewMemberData} onClose={toggleView}/>}
    </>
    )
}

export default Table