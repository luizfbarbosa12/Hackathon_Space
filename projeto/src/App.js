
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes />
    <Footer />
    <ProjectDetails/>
    </BrowserRouter>
  );
}

export default App;
