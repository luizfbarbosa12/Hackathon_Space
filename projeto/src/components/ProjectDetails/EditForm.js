import React from "react";

const EditForm = (props) => {
  return (
  <div>
        <input onChange={props.newDescription} placeholder={'Escreva aqui a nova descrição'}/>
        <button onClick={props.saveDescription}>Salvar</button>
  </div>

  )};

  export default EditForm;