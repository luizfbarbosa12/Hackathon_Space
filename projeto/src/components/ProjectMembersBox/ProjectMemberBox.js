import React from 'react'
import Member from './Member'
import {MainContainer, BoxHeader} from './ProjectMemberBoxStyles'

const ProjectMemberBox = () => {
    return(
        <MainContainer>
            <BoxHeader>
            Project Member Box
            </BoxHeader>
            <Member/>
            <Member/>
            <Member/>
        </MainContainer>
    )
}

export default ProjectMemberBox;