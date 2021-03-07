import React, { useState, useEffect } from 'react';

import api from './../../services/api';

import { HomeColors, Pagination, PersonList } from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRemoveRedEye } from 'react-icons/md';

import card from './../../assets/capa.jpg';

import Header from './../../components/Header';

let pos;

let total;

function Home() {
    const environment = 'http://localhost:3000';

    const [personStarWars, setPersonStarWars] = useState([]);

    const numberPerPageDefault = 10;

    useEffect(() => {
        pos = 1;
        api.get(`/people/?page=${pos}`).then(response => {
            total = (response.data.count / numberPerPageDefault).toFixed(0);
            if (response) {
                setPersonStarWars(response.data.results);

            }   
        })
    }, [])

    function nextPage() {
        pos++;
        if (pos <= total) {
            api.get(`/people/?page=${pos}`).then(response => {
                if (response) {
                    setPersonStarWars(response.data.results);
                }
            })
        } else {
            //inserir toastr
        }
        
    }

    function previousPage() {
        if (pos > 1) {
            pos--;
            api.get(`/people/?page=${pos}`).then(response => {
                if (response) {
                    setPersonStarWars(response.data.results);
                    console.log(personStarWars);
                }
            })
        } else {
            //inserir toastr 
        }
    }

    function viewDetails(name) {
        const objectPerson = personStarWars.filter((e) => e.name === name);
        const url = objectPerson[0].url;
        const urlWithoutLink = url.replace('http://swapi.dev/api/people/', '');
        const indexPerson = urlWithoutLink.replace('/', '');
        window.location.href = `${environment}/details/${indexPerson}`;
    }

    return(
        <div>
            <Header />
            <HomeColors>
                <h3>Lista de Personagens</h3>
            </HomeColors>

            <PersonList>
                {personStarWars.map(person => {
                    return(
                        <li key={person.name} style={{backgroundImage: `url(${card})`, backgroundPosition: 'center', backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                            <h3>Nome: {person.name}</h3>
                            <h3>Nascimento: {person.birth_year}</h3>
                            <h3>Altura: {person.height} cm</h3>
                            <h3>Cor dos Olhos: {person.eye_color}</h3>
                            <button type="button" onClick={() => viewDetails(person.name)}>
                                <div>
                                    <MdRemoveRedEye size={30} style={{color: 'gold'}}/>
                                </div>
                                <span>Detalhes</span>                   
                            </button>
                        </li>        
                    );
                })}
            </PersonList>
            
            <Pagination>
                <button onClick={previousPage}>
                    <MdKeyboardArrowLeft size={50} style={{color: 'gold'}} />
                </button>
                <p style={{color:'gold'}}>{pos} de {total}</p>
                <button onClick={nextPage}>
                    <MdKeyboardArrowRight size={50} style={{color: 'gold'}} />
                </button>
            </Pagination>
        </div>
    );
}

export default Home;