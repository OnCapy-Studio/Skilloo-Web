import React, { useEffect, useState } from 'react'
import * as C from './styles'

import axios from 'axios'
import { BASE_URL } from '../../../context/requests'

import Pagination from '../../../components/Pagination'
import TableData from '../../../components/Table/TableData'

const Turmas = () => {
    const [turmas, setTurmas] = useState({
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

        axios.get(`${BASE_URL}/turmas?size=3&page=${pageNumber}`, {
            headers: {
                Authorization: token,     
            },
        }).then((response) => {setTurmas(response.data)})
    }, [pageNumber])

    return (
        <C.Container>
            <TableData 
                head={['Turmas', 'Ações']}
                data={turmas}
                icon={'computer'}
            />

            <Pagination dados={turmas} onChange={handlePageChange} />
        </C.Container>
    ) 
}

export default Turmas