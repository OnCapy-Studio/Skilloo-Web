import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    main > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
        padding: 0 2em;
        height: 100%;
        background-color: #f1f1f1;
    }
`;

export default GlobalStyle;
