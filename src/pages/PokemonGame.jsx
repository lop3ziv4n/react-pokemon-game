import React, {useEffect, useState} from 'react';
import swal from 'sweetalert';

import GameHint from '../components/GameHint';
import {getPokemons, randomNumber} from '../utils/api';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import GameHelp from '../components/GameHelp';
import NoData from '../components/NoData';


const PokemonGame = () => {
    const [optionsPokeData, setOptionsPokeData] = useState([]);
    const [chosenPokeData, setChosenPokeData] = useState();
    const [loading, setLoading] = useState(true);
    const [showFront, setShowFront] = useState(false);
    const [state, setState] = useState({refresh: 0});

    const findOptionsGame = async () => {
        setLoading(true);
        const pokemons = await getPokemons();
        setOptionsPokeData(pokemons);
        const chosenPokemon = pokemons[randomNumber(1, 4)];
        setChosenPokeData(chosenPokemon);
        setLoading(false);
        setShowFront(false);
    };

    useEffect(() => {
        findOptionsGame();
    }, [state.refresh]);

    const validate = (pokemon) => {
        if (chosenPokeData.id === pokemon.id) {
            setShowFront(true);
            alertRight();
        } else {
            alertWrong();
        }
    }

    const alertWrong = () => {
        swal({
            title: "Incorrecto!!!",
            text: "No te preocupes, inténtalo nuevamente!!!",
            icon: "warning",
            dangerMode: true,
        });
    }

    const alertRight = () => {
        swal({
            title: "Excelente!!!",
            text: "Lo has adivinado!!!",
            icon: "success",
            dangerMode: false,
            buttons: ["Cancelar", "Otra vez!!!"],
        }).then((again) => {
            if (again) {
                setState({...state, refresh: state.refresh + 1})
            }
        });
    }

    return (
        <div className="container">
            {
                loading ?
                    <Loading/>
                    :
                    optionsPokeData.length > 0
                        ?
                        <div>
                            <div className="row justify-content-around p-3">
                                <div className="col-lg-4 pb-lg-0 pb-3">
                                    <GameHint/>
                                </div>
                                <div className="col-lg-4 col-sm-6 pb-lg-0 pb-3">
                                    <PokemonCard pokemon={chosenPokeData} showFront={showFront}/>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <GameHelp pokemon={chosenPokeData}/>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    optionsPokeData.map((item) => (
                                        <div className="col-lg-4 col-sm-6 p-3" key={item.id}>
                                            <PokemonCard key={item.id} pokemon={item} showFront={true}
                                                         validate={validate}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        : <NoData/>
            }
        </div>
    );
}


export default PokemonGame;
