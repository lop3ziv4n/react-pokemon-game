import React from 'react';

const GameHelp = ({pokemon}) => (
    <section>
        <div className="card bg-transparent">
            <div className="card-body">
                <h4 className="card-title">Ayuda:</h4>
                <p className="card-text"> Habilidades: </p>
                {
                    pokemon.abilities.map(poke => {
                        return (
                            <h5 className="text-center" key={poke.ability.name}>
                                <span className="badge rounded-pill text-bg-danger">{poke.ability.name}</span>
                            </h5>
                        )
                    })
                }
                <p className="card-text"> Tipo: </p>
                {
                    pokemon.types.map(poke => {
                        return (
                            <h5 className="text-center" key={poke.type.name}>
                                <span className="badge rounded-pill text-bg-success">{poke.type.name}</span>
                            </h5>
                        )
                    })
                }
            </div>
        </div>
    </section>
);

export default GameHelp;
