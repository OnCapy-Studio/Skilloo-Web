import React, { useEffect, useState } from 'react';
import * as C from './styles'

import axios from 'axios'
import { BASE_URL } from '../../../context/requests'

import Pagination from '../../../components/Pagination'
import TableData from '../../../components/Table/TableData'
import { TbGridDots } from 'react-icons/tb'

const Materias = () => {
    const iconTag = <TbGridDots />

    const [materias, setMaterias] = useState({
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

        axios.get(`${BASE_URL}/materias?size=4&page=${pageNumber}`, {
            headers: {
                Authorization: token,
            },
        }).then(response => {setMaterias(response.data)})
    }, [pageNumber]);

    return (
        <C.Container>
            <TableData 
                head={['Materias', 'Ações']}
                data={materias}
                icon={iconTag}
            />

            <Pagination dados={materias} onChange={handlePageChange} />
        </C.Container>
    )
}

export default Materias