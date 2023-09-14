import React, { useEffect, useState } from 'react'
import * as C from './styles'

import axios from 'axios'
import { BASE_URL } from '../../../context/requests'

import { BsPersonFill } from 'react-icons/bs'
import Pagination from '../../../components/Pagination'
import TableData from '../../../components/Table/TableData'

const Membros = () => {
    const iconTag = <BsPersonFill/>

    const [professores, setProfessores] = useState({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    })

    const [pageNumber, setPageNumber] = useState(0)
    const handlePageChange = newPageNumber => setPageNumber(newPageNumber)

    useEffect(() => {
        const token = localStorage.getItem('authToken')

        axios.get(`${BASE_URL}/professores?size=4&page=${pageNumber}`, {
            headers: {
                Authorization: token,
            },
        }).then((response) => {setProfessores(response.data)})
    }, [pageNumber])

    return (
        <C.Container>
            <TableData 
                head={['Membros', 'Ações']}
                data={professores}
                icon={iconTag} 
            />
            
            <Pagination dados={professores} onChange={handlePageChange}/>
        </C.Container>
    )
}

export default Membros