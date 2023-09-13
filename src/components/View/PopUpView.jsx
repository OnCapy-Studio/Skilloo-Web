import React from 'react'
import * as C from './styles'

import Field from './Field'

const PopUpEdit = ({ memberData, onClose }) => {
    const keys = Object.keys(memberData)

    return (
        <C.Container>
            <C.Frame>
                <C.TopSection>
                    <C.Title>Dados:</C.Title>

                    <C.Close 
                        className="material-symbols-outlined"
                        onClick={onClose}
                    >
                        close
                    </C.Close>
                </C.TopSection>
                <C.Form>
                    {Object.keys(memberData).map((att, index) => (
                        <Field
                            key={index}
                            label={att}
                            type="text"
                            value={memberData[att]}
                        />
                    ))}
                </C.Form>
            </C.Frame>
        </C.Container>
    )
}

export default PopUpEdit