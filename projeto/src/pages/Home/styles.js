import styled from 'styled-components';

import { darken } from 'polished';

export const HomeColors = styled.h3`
    color: #00BFFF; 
    text-align: center;
    font-size: 50px;
    font-weight: bold;
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
    grid-template-columns: repeat(4, 1fr);
    color: black;
    grid-gap: 20px;
    list-style: none;
    text-align: center;
    margin-top: 100px;

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