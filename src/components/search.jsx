import React,{useState,useEffect} from 'react';


export function Search() {
    const [query,setQuery] = useState({});
    const [pokemon,setPokemon] = useState('');
    

    const handle = evt => {
        if(evt.key === 'Enter'){
            fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then(res => res.json())
            .then(result =>{
                setPokemon(result)
                setQuery('')
                console.log(result)
            
            })
            
        
        }
    };
    useEffect(() =>{
        setQuery('')
        
    },[])
    

    

    
    
  return <div className="container">
      <input type="text" id="search" placeholder="pokemon" onChange={e => setQuery(e.target.value)} onKeyPress={handle} value={query}/>
      {(typeof pokemon.name != "undefined")?(
          <div className="container__data">
              <h2>No.{pokemon.order}</h2>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.other["home"].front_default} alt="" />
          <div className="container__data__tipos" id="tipos">
              {pokemon.types.map((type)=>{
                  return(
                      <h3>{type.type.name}</h3>
                  )
              })}
          
          
          </div>
          <h4>Basic Stats: </h4>
          <ul id="ul">
              <li>HP: {pokemon.stats[0].base_stat}</li>
              <li>Attack: {pokemon.stats[1].base_stat}</li>
              <li>Defense: {pokemon.stats[2].base_stat}</li>
              <li>Spec. Attack: {pokemon.stats[3].base_stat}</li>
              <li>Spec. Defense: {pokemon.stats[4].base_stat}</li>
              <li>Speed: {pokemon.stats[5].base_stat}</li>
          </ul>
      </div>
      ):("")}
      
  </div>;
}
