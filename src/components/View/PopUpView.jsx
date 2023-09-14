import React, { useState } from 'react'
import * as C from './styles'

import {
    IoClose
} from 'react-icons/io5'

import InputLabel from '../InputLabel'

const PopUpEdit = ({ memberData, onClose }) => {
  // Criando um estado de objeto com as propriedades do membro
    const [formData, setFormData] = useState({...memberData})

  // Função para atualizar um valor específico no objeto de estado
    const handleChange = (property, value) => {
        setFormData({
        ...formData,
        [property]: value,
        })
    }

  return (
        <C.Container>
            <C.Frame>
                <C.TopSection>
                    <C.Title>Dados:</C.Title>
                    <IoClose onClick={onClose}/>
                </C.TopSection>
                
                <C.Form>
                    {Object.keys(formData).map((key) => (
                        <InputLabel
                            key={key}
                            label={key}
                            type="text"
                            value={formData[key]}
                            onChange={(e) => handleChange(key, e.target.value)}
                            placeholder=""
                        />
                    ))}
                </C.Form>

                <C.BottomSection>
                    <C.SubmitBtn>Enviar</C.SubmitBtn>
                </C.BottomSection>
            </C.Frame>
        </C.Container>
  )
}

export default PopUpEdit