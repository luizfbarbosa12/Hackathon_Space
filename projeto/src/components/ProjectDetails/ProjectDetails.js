import React from "react";
import GostarBranco from "../../assets/gostar.png";
import Comment from "../../assets/comment.png";
import Edit from "../../assets/edit.png";
import Add from "../../assets/add-user.png";
import {
  CardProjeto,
  Header,
  IconsFooter,
  ProjectDescription,
  Footer,
  ProjectName
} from "./ProjectDetailStyle";
import { useState } from "react";
import GostarPreto from "../../assets/blackHeart.png";
import CommentSection from "./CommentSection";
import EditForm from './EditForm'
import AddMemberForm from './AddMemberForm'

const ProjectDetails = () => {
  const [liked, setLiked] = useState(false);
  const [likesNumber, setLikesNumber] = useState(0);
  const [commenting, setCommenting] = useState(false);
  const [commentNumber, setCommentNumber] = useState(0);
  const [projectDescription, setProjectDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat')
  const [editing, setEditing] = useState(false)
  const [members, setMembers] = useState({})
  const [adding, setAdding] = useState(false)

  const onClickCurtida = () => {
    setLiked(!liked);
    setLikesNumber(likesNumber + 1);
    if (likesNumber > 0) {
      setLikesNumber(likesNumber - 1);
    }
  };

  const onClickComment = () => {
    setCommenting(!commenting);
  };

  const sendingComment = () => {
    setCommenting(false)
    setCommentNumber(commentNumber + 1);
   
}

const EditDescription = () => {
  setEditing(!editing)
  
}

const onChangeNewDescription = (event) => {
  setProjectDescription(event.target.value)
}

const onClickNewDescription = () => {
  setProjectDescription(projectDescription)
  setEditing(!editing)
}

const onClickAdd = () => {
  setAdding(true)
}

const onChangeNewMember = (event) => {
  setMembers(event.target.value)
}

  let addSection = adding ? <AddMemberForm inputsMembers={onChangeNewMember}/> : ''

  let editSection = editing ? <EditForm saveDescription={onClickNewDescription} newDescription={onChangeNewDescription}/> : ''

  let commentSection = commenting ? <CommentSection send={sendingComment}/> : "";

  let iconeCurtida;

  if (liked) {
    iconeCurtida = GostarPreto;
  } else {
    iconeCurtida = GostarBranco;
  }

  return (
    <CardProjeto>
      <Header>
        <ProjectName>Projeto Lorem Ipsum</ProjectName>
        <ProjectDescription>
          {projectDescription}
        </ProjectDescription>
      </Header>

      <Footer>
        <section>
          <IconsFooter onClick={onClickAdd} src={Add} />
        </section>
        <section>
          <IconsFooter onClick={EditDescription} src={Edit} />
        </section>
        <section>
          <IconsFooter onClick={onClickComment} src={Comment} />
          {commentNumber}
        </section>
        <section>
          <IconsFooter onClick={onClickCurtida} src={iconeCurtida} />
          {likesNumber}
        </section>
      </Footer>
      {commentSection}
      {editSection}
      {addSection}
    </CardProjeto>
  );
};

export default ProjectDetails;
