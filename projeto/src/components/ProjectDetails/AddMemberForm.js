import React from 'react'

const AddMemberForm = (props) => {
    return(
        <div>
            <input value={props.inputsMembers} placeholder={"foto"}/>
            <input value={props.inputsMembers} placeholder={"Nome"}/>
            <input value={props.inputsMembers} placeholder={"Cargo"}/>
        </div>
    )
}

export default AddMemberForm;