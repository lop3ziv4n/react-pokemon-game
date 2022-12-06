import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import PokemonGame from './pages/PokemonGame';

import './App.css';

const App = () => (
    <main>
        <Header/>
        <PokemonGame/>
        <Footer/>
    </main>
);

export default App
