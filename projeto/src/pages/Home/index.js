import React, { useState, useEffect } from 'react';

import { ExtractSpecialCharacters, GenerateNameSearch} from './../../services/name-search.service';

import { Filters, PersonList } from './styles';

import person from './../../assets/allan.jpg';

import capa from './../../assets/capa.jpg';

function Home() {
    const environment = 'http://localhost:3000';

    const [projects, setProjects] = useState([]);

    const [name, setName] = useState([]);

    useEffect(() => {
        const arrayProject = [
            {id: 1, name: 'Autenticação JWT', description: 'Criar Autenticação para o login dos usuários a plataforma da space', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 10, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 2, name: 'Disponibilizar Rest para consumo dos dados no Front End', description: 'Criar Rests para os CRUDS da plataforma Web', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 5, comments: [{message: 'da'}, {message: 'hora'}, {message: '1'}, {message: '2'}]},
            {id: 3, name: '1', description: '11', type: 'UI', personList: [{name: 'Allan Alves'}], quantityLikes: 1, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 4, name: '2', description: '112', type: 'UI', personList: [{name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 4, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 5, name: '3', description: '113', type: 'UX', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 8, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 6, name: '4', description: '114', type: 'UX', personList: [{name: 'Felipe Gonçalves'}], quantityLikes: 19, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 7, name: '5', description: '115', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 0, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 8, name: '6', description: '116', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 6, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
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
            {id: 1, name: 'Autenticação JWT', description: 'Criar Autenticação para o login dos usuários a plataforma da space', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 10, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 2, name: 'Disponibilizar Rest para consumo dos dados no Front End', description: 'Criar Rests para os CRUDS da plataforma Web', type: 'BACKEND', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 5, comments: [{message: 'da'}, {message: 'hora'}, {message: '1'}, {message: '2'}]},
            {id: 3, name: '1', description: '11', type: 'UI', personList: [{name: 'Allan Alves'}], quantityLikes: 1, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 4, name: '2', description: '112', type: 'UI', personList: [{name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 4, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 5, name: '3', description: '113', type: 'UX', personList: [{name: 'Allan Alves'}, {name: 'Luiz Fernando'}], quantityLikes: 8, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 6, name: '4', description: '114', type: 'UX', personList: [{name: 'Felipe Gonçalves'}], quantityLikes: 19, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 7, name: '5', description: '115', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 0, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
            {id: 8, name: '6', description: '116', type: 'FRONTEND', personList: [{name: 'Allan Alves'}, {name: 'Felipe Gonçalves'}, {name: 'Luiz Fernando'}], quantityLikes: 6, comments: [{message: 'Hello'}, {message: 'World'}, {message: 'Teste'}]},
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
            <Filters>
                <input type="text" placeholder="Insira o nome do Projeto" onChange={event => setTitle(event.target.value)}/>
                <button id="styleButtonSearch" type="button" onClick={() => filterName()}>Adicionar</button>
                <button id="styleButton" type="button" onClick={() => filterType('UI')}>UI</button>
                <button id="styleButton" type="button" onClick={() => filterType('UX')}>UX</button>
                <button id="styleButton" type="button" onClick={() => filterType('BACKEND')}>Back End</button>
                <button id="styleButton" type="button" onClick={() => filterType('FRONTEND')}>Front End</button>
                <button id="styleButton" type="button" onClick={() => clearFilter()}>Limpar Filtro</button>
                <button id="styleButton" type="button" onClick={() => newProject()}>Adicionar Projeto</button>
                <img src={person}></img>
            </Filters>
            {(!projects || projects.length === 0) && <h1>Projeto não encontrado</h1>}
            {(projects.length > 0) && (
                
            <PersonList>
                {projects.map(element => {
                    return(
                        <li key={element.id} style={{backgroundImage: `url(${capa})`, backgroundPosition: 'center', backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                            <h2>Nome: {element.name}</h2>
                            <h4>Descrição: {element.description}</h4>
                        </li>
                    )
                })}
            </PersonList>)}
            {/* <div>
                <HomeColors>
                </HomeColors>

                <PersonList>
                </PersonList>
                
                <Pagination>
                    
                </Pagination>

            </div> */}
        </div>
        

    );
}

export default Home;