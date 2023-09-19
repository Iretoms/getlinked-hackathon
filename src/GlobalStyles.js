import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #150E28;
    color: #fff;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}
`;

export default GlobalStyles