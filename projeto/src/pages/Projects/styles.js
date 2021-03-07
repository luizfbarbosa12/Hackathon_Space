import styled from 'styled-components';

export const FormProject = styled.div`
    background-color: #D83772;
    margin: 2%;
    text-align: center;
    padding-top: 10px;

    #headerForm h2{
        width: 100%;
        font-size: 24px;
        margin-top: 20px;
        padding: 20px 0;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #7C2AE8;
    }

    .input_field input {
        width: 80%;
        padding: 10px 0;
        text-align: center;
        border-radius: 5px;
        border: #d3d3d3;
        margin: 10px;
    }

    .btn input {
        width: 80%;
        padding: 2%;
        margin: 20px;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        background-color: #7C2AE8;
    }

    .btn input:hover {
        background-color: white;
        color: #7C2AE8;
        font-weight: bold;
    }
    
`;
