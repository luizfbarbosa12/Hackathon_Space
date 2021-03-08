/* eslint-disable no-undef */
import React from 'react';

import { FormProject } from './styles';

import { Link } from 'react-router-dom';

function Projects (){

    return (
        <div>
            <FormProject>
                <div id="headerForm">
                    <h2>Cadastro de Projeto</h2>
                </div>
                <form id="myform">
                    <div className="input_field">
                        <input type="text" placeholder="Nome" id="name"></input>
                    </div>
                    <div className="input_field">
                        <input type="text" placeholder="Descrição" id="description"></input>
                    </div>
                    <div className="input_field">
                        <input type="text" placeholder="Tipo" id="type"></input>
                    </div>
                    <Link to="/">
                        <div className="btn">
                            <input type="submit" value="Enviar"></input>
                        </div>
                    </Link>
                </form>
            </FormProject>
        </div>
    );
}

export default Projects;
