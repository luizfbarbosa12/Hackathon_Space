import React, { useState, useEffect } from 'react';

import api from './../../services/api';

import { HomeColors, Pagination, PersonList } from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRemoveRedEye } from 'react-icons/md';

import card from './../../assets/capa.jpg';

// import Header from './../../components/Header';

// import Footer from './../../components/Footer';

let pos;

let total;

function Home() {
    

    return(
        <div>
            <HomeColors>
            </HomeColors>

            <PersonList>
            </PersonList>
            
            <Pagination>
                
            </Pagination>
        </div>
    );
}

export default Home;