import styled from 'styled-components'

export const CardProjeto = styled.div`
    width: 30vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 0;
    background-image: linear-gradient(180deg, #d6c0d4, #beaabc);
    border-radius: 15px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    padding: 15px;

`

export const Header = styled.header`
    background-image: linear-gradient(180deg, #f2f3f5, #faf2f9);
    border-radius: 15px;
    transition: 0.1s ease;

    &:hover{
        border-bottom: 2px solid #d83773;   
    }
    
`
export const ProjectDescription = styled.p`
    width: 30vw;
    height: 20vh;
    text-align: left;
    margin: 0;
    padding: 10px;
    
`
export const ProjectName = styled.p`
    width: 15vw;
    height: 3vh;
    text-align: left;
    margin: 0;
    padding: 10px;
    font-style: italic;
    opacity: 0.8;
    font-weight: bold;
`

export const IconsFooter = styled.img`
    width: 2vw;
    height:3.5vh;
    padding: 2px;
    margin: 0;
    padding: 5px;
    cursor: pointer;
`
export const Line = styled.hr`
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-image: linear-gradient(180deg, #d83773, #7c2ae8)
`
export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    padding: 4px;
    margin: 0;
    margin-top: 3vh;

`