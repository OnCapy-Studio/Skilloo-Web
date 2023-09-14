import styled from 'styled-components'

export const Table = styled.table`
    background-color: #fff;
    border-radius: 15px;
    border-collapse: separate;
    padding: 0 1.5em;
    width: 100%;
    min-width: auto;
    max-width: 1000px;
`

export const Th = styled.th`
    padding: 1.5em 0;
    color: #777777;
    text-align: center;
    border-bottom: 1px solid #d4d3d3;
`

export const Td = styled.td`
    padding: 1.5em 0;

    td:first-child {
        width: 75%
    }

    div {
        display: flex;
        align-items: center;
        gap: 1em;
        height: 100%;
    }

    svg {
        width: 24px;
        height: auto;
        color: #FF1F00;
        cursor: pointer;
    }

    svg:first-child {
        color: #666;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
`

export const ScreenIcon = styled.span`
    background-color: transparent;
    color: #666;
`