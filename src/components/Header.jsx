import React from 'react';

import pokemonHeader from '../assets/pokemon-header.png';
import joystick from '../assets/joystick.png';

const Header = () => (
    <header className="row justify-content-center mb-4">
        <div className="col-md-4 position-relative">
            <img className="position-relative" style={{width: '30rem'}} src={pokemonHeader} alt="pokemon-header"/>
            <img className="position-absolute top-100 start-100 translate-middle" style={{width: '4rem'}} src={joystick}
                 alt="pokemon-header"/>
        </div>
    </header>
);

export default Header;
