import React from "react";
import { ProjectDescription } from "./ProjectDetailStyle";

const EditForm = (props) => {
  return (
  <div>
        <input onChange={props.newDescription} placeholder={'Escreva aqui a nova descrição'}/>
        <button onClick={props.saveDescription}>Salvar</button>
  </div>

  )};

  export default EditForm;