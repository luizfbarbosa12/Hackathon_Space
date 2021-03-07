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
  ProjectName,
  Line,
} from "./ProjectDetailStyle";
import { useState } from "react";
import GostarPreto from "../../assets/blackHeart.png";
import CommentSection from "./CommentSection";

const ProjectDetails = () => {
  const [liked, setLiked] = useState(false);
  const [likesNumber, setLikesNumber] = useState(0);
  const [commenting, setCommenting] = useState(false);
  const [commentNumber, setCommentNumber] = useState(0)

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ProjectDescription>
      </Header>

      <Footer>
        <section>
          <IconsFooter src={Add} />
        </section>
        <section>
          <IconsFooter src={Edit} />
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
    </CardProjeto>
  );
};

export default ProjectDetails;
