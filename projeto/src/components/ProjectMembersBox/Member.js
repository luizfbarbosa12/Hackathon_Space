import React from 'react' 
import {Circle, MainContainer, MemberName, MemberPosition, TextContainer} from './MemberStyles'

const Member = () => {
    return(
        <MainContainer>
            <Circle>Foto</Circle>
            <TextContainer>
                <MemberName>Nome do Membro</MemberName>
                <MemberPosition>Cargo</MemberPosition>
            </TextContainer>
        </MainContainer>
    )
}

export default Member;