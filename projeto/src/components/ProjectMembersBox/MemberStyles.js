import styled from 'styled-components'


export const Circle = styled.div`
    background-color: black;
    border-radius: 50%;
    width: 5vw;
    height: 10vh;
    color: white;
    text-align: center;
    margin-left: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2vh;
    
`

export const MemberName = styled.p`
    margin: 0 15px;
    padding: 5px 0;
   
    font-weight: bold;
`

export const MemberPosition = styled.p`
    margin: 0 15px;
    padding: 5px 0;
    font-style: italic;
    opacity: 0.8;
`

export const TextContainer = styled.div`
    border-radius: 10px;
    background-image: linear-gradient(180deg, #f2f3f5, #faf2f9);
    margin-left: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
`