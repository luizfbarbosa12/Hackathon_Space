import React from "react";
import {useState} from 'react'

const CommentSection = (props) => {
  const [commentValue, setCommentValue] = useState("");
 
  const [comments, setComments] = useState([])

  const onChangeComment = (event) => {
    setCommentValue(event.target.value)
  };

  const onClickComment = () => {
      comments.push(commentValue)
  }
  
  console.log(commentValue)
  console.log(comments)
  return (
    <div className={"comment-container"}>
      <input
        className={"input-comentario"}
        placeholder={"Comentário"}
        value={commentValue}
        onChange={onChangeComment}
      />
      <button onClick={onClickComment} onClick={props.send}>Enviar</button>
      <p>
        {comments.map((comment) => {
            return <li>{comment}</li>
        })}  
      </p>
    </div>
  );
};

export default CommentSection;