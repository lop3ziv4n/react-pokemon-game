import React from 'react';

import pokemonHeader from '../assets/pokemon-header.png';
import joystick from '../assets/joystick.png';

const Header = () => (
    <header className="row justify-content-center mb-4">
        <div className="col-9 col-md-6 position-relative">
            <img className="img-fluid" src={pokemonHeader} alt="pokemon-header"/>
            <img className="position-absolute top-100 start-100 translate-middle" style={{width: '5rem'}} src={joystick}
                 alt="pokemon-header"/>
        </div>
    </header>
);

export default Header;
