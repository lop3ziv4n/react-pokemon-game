import React from 'react';

import pokemonCard from '../assets/pokemon-card.jpeg';

const PokemonCard = ({pokemon, showFront, validate}) => {
    return (
        <section>
            {
                showFront ?
                    <div className="card border-white bg-transparent" style={{cursor: 'pointer'}}
                         onClick={() => validate !== undefined ? validate(pokemon) : null}>
                        <img src={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.front_default}
                             className="card-img" style={{height: '28rem'}} alt={pokemon.name}/>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-uppercase text-white float-end mx-0"
                                style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>{pokemon.name}</h3>
                        </div>
                    </div>
                    :
                    <div className="card border-white" style={{cursor: 'pointer'}}>
                        <img src={pokemonCard} className="card-img"
                             style={{height: '28rem'}} alt={pokemon.name}/>
                    </div>
            }
        </section>
    );
}

export default PokemonCard;
