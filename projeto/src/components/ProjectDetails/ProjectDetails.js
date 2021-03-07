import React from "react";
import Gostar from '../../assets/gostar.png'
import Comment from '../../assets/comment.png'
import Edit from '../../assets/edit.png'
import Add from '../../assets/add-user.png'
import {CardProjeto, Header, IconsFooter, ProjectDescription, Footer, ProjectName, Line} from './ProjectDetailStyle'


const ProjectDetails = () => {
  return (
    <CardProjeto>
      <Header>
      <ProjectName>Projeto Lorem Ipsum</ProjectName>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ProjectDescription>
      </Header>
      
      
      <Footer>
        <section><IconsFooter src={Add}/></section>
        <section><IconsFooter src={Edit}/></section>
        <section><IconsFooter src={Comment}/></section>
        <section><IconsFooter src={Gostar}/></section>
      </Footer>
    </CardProjeto>
  );
};

export default ProjectDetails;
