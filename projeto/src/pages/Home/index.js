import React, { useState, useEffect } from 'react';

import { ExtractSpecialCharacters, GenerateNameSearch} from './../../services/name-search.service';

function Home() {
    const environment = 'http://localhost:3000';

    const [projects, setProjects] = useState([]);

    const [name, setName] = useState([]);

    useEffect(() => {
        const arrayProject = [
            {name: 'Autenticação JWT', description: 'Criar Autenticação para o login dos usuários a plataforma da space', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 10, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: 'Disponibilizar Rest para consumo dos dados no Front End', description: 'Criar Rests para os CRUDS da plataforma Web', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 5, comments: [{message: 'da'}, {message: 'hora'}, {message: '1'}, {message: '2'}]},
            {name: '1', description: '11', type: 'UI', personList: [{name: 'Allan Alves'}], quantityLikes: 1, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '2', description: '112', type: 'UI', personList: [{name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 4, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '3', description: '113', type: 'UX', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 8, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '4', description: '114', type: 'UX', personList: [{name: 'Felipe Gonçalves'}], quantityLikes: 19, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '5', description: '115', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 0, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '6', description: '116', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 6, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
        ]
        setProjects(arrayProject);
    }, []);

    function filterName() {
        const nameProject = name.toUpperCase();
        const objProjects = [];
        if (nameProject && nameProject.trim().length > 0) {
            projects.forEach(element => {
                const nameWithoutSpecialCharacters = ExtractSpecialCharacters(element.name);

                const aux = GenerateNameSearch(nameWithoutSpecialCharacters);

                aux.then(response => {
                    const includeProjects =  response.includes(nameProject);

                    if (includeProjects === true) {
                        objProjects.push(element);
                        setProjects(objProjects);
                    }
                })
            });
        } else {
            // toastr de error
        }
    }

    function filterType(typeProject) {
        const objProjects = projects.filter((e) => e.type === typeProject);
        if (objProjects && objProjects.length > 0) {
            setProjects(objProjects);
        } else {
            setProjects([]);
        }
    }

    function clearFilter() {
        const arrayProject = [
            {name: 'Autenticação JWT', description: 'Criar Autenticação para o login dos usuários a plataforma da space', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 10, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: 'Disponibilizar Rest para consumo dos dados no Front End', description: 'Criar Rests para os CRUDS da plataforma Web', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 5, comments: [{message: 'da'}, {message: 'hora'}, {message: '1'}, {message: '2'}]},
            {name: '1', description: '11', type: 'UI', personList: [{name: 'Allan Alves'}], quantityLikes: 1, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '2', description: '112', type: 'UI', personList: [{name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 4, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '3', description: '113', type: 'UX', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 8, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '4', description: '114', type: 'UX', personList: [{name: 'Felipe Gonçalves'}], quantityLikes: 19, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '5', description: '115', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 0, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {name: '6', description: '116', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 6, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
        ];
        setProjects(arrayProject);
    }

    function newProject() {
        window.location.href = `${environment}/project`;
    }

    function setTitle(name) {
        setName(name);
    }

    return(
        <div>
            <input type="text" placeholder="Insira o nome do Projeto" onChange={event => setTitle(event.target.value)}/>
            <button type="button" onClick={() => filterName()}>Adicionar</button>
            <button type="button" onClick={() => filterType('UI')}>UI</button>
            <button type="button" onClick={() => filterType('UX')}>UX</button>
            <button type="button" onClick={() => filterType('BACKEND')}>Back End</button>
            <button type="button" onClick={() => filterType('FRONTEND')}>Front End</button>
            <button type="button" onClick={() => clearFilter()}>Limpar Filtro</button>
            <button type="button" onClick={() => newProject()}>Adicionar Projeto</button>
            {(!projects || projects.length == 0) && <h1>Projeto não encontrado</h1>}
            {(projects.length > 0) && (
            <div>
                {projects.map(element => {
                    return(
                        <div key="element.name">
                            <h1>{element.name}</h1>
                            <h3>{element.description}</h3>
                        </div>
                    )
                })}
            </div>)}
        </div>
    );
}

export default Home;