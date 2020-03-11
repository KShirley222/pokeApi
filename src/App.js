import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function App() {
  
  const [pokeName, setName] = useState([]);
  
  const Pokeapi = e =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then( res => {
          console.log(res);
          setName(res.data.results);
        })
        .catch( err => console.log(err) );
  }
 

  return (
    <>
      <h1> Pokemon</h1>
      <button onClick = {Pokeapi}>Pokemon</button>
      <ul>
      {
        pokeName.map( (name, i) =>
        <li key = {i}>{name.name}</li>
        )
      }
      </ul>
    </>
  );
}

export default App;
