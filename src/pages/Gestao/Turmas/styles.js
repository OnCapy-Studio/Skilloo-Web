import styled from 'styled-components'

export const Container = styled.div`
`

export const Table = styled.table`
    background-color: #fff;
    border-radius: 15px;
    border-collapse: separate;
    padding: 0 1em;
    width: 100%;
    max-width: 600px;

    th {
        padding: 1.5em;
        border-bottom: 1px solid #d4d3d3;
        color: #777777;
    }

    td {
        text-align: center;
        padding: 1em;
        gap: 1em;
        width:50%;
    }

    td div {
        display: flex;
        align-items: center;
        gap: 1em;
        height: 100%;
    }
`