import styled from 'styled-components';

import { darken } from 'polished';

export const HomeColors = styled.h3`
    color: #00BFFF; 
    text-align: center;
    font-size: 50px;
    font-weight: bold;
`;

export const Filters = styled.div`
    margin-top: 10px;

    input {
        margin-left: 10px;
        padding: 10px;
        border-radius: 10px 0 0 10px;
        border-color: transparent;
    }

    img {
        margin: 10px;
        height: 50px;
        width: 50px;
        background-color: #000000;
        border-radius: 100px;
        float: right;
    }

    button#styleButtonSearch {
        padding: 10px;
        border-radius: 0 10px 10px 0;
        color: #FFFFFF;
        background-color: #8c0dd8;
        border-color: transparent;

        &:hover {
            background: ${darken(0.05, '#8c0dd8')};
            font-weight: bold;
        }
    }
    
    button#styleButton {
        padding: 10px 50px;
        border-radius: 10px;
        margin: 10px;
        color: #FFFFFF;
        background-color: #8c0dd8;
        border-color: transparent;

        &:hover {
            background: ${darken(0.05, '#8c0dd8')};
            font-weight: bold;
        }
    }

`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    button {
        background: transparent;
        border-color: transparent;
    }
`;

export const PersonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black;
    grid-gap: 20px;
    list-style: none;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 20px
    }

    h3 {
        color: #111111;
        font-weight: bold
    }

    button {
        background: #00BFFF;
        color: #ffffff;
        border: 0px;
        border-radius: 5px;
        overflow: hidden;
        margin-top: auto;

        display: flex;
        align-items: center;

        &:hover {
            background: ${darken(0.05, '#00BFFF')}
        }

        div {
            display: flex;
            align-items: center;
            padding: 12px;
        }

        span {
            flex: 1;
            text-align: center;
            font-weight: bold;
            font-size: 20px
        }
    }
`; 