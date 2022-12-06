import axios from 'axios';

const MIN_ITEM = 0;
const MAX_ITEM = 1155;
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${MIN_ITEM}&limit=${MAX_ITEM}`;

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const fetchPokemon = async (url) => await axios.get(url).then(res => res.data);

const getPokemons = async () => {
    let pokemons = [];
    const {results} = await fetchPokemon(`${URL}`);
    while (pokemons.length < 3) {
        const item = results[randomNumber(MIN_ITEM, MAX_ITEM)];
        pokemons = [...pokemons, await fetchPokemon(item.url)];
    }
    return pokemons;
}

export {getPokemons, randomNumber};
