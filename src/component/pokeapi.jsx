import React from 'react';
import axios from 'axios';

const Pokeapi = e =>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then( res => console.log(res) )
        .catch( err => console.log(err) );

    return(
        <>
            <h1> Pokemon</h1>
            <button onClick = {Pokeapi}>Pokemon</button>
        </>
    );
}

export default Pokeapi;