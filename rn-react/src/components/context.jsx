import { useEffect, useState } from "react";

function Pokemon() {
  
  
  const [pokemon, setPokemon] = useState(null);
  const [text, setText] = useState("pikachu");

  useEffect(() => {
    if (!text) {
      setPokemon(null);

      return;
    }



    const Fetchdata = async () => {
      try {
        const greet = await fetch(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`);
        if (!greet.ok) {
          throw new Error('Failed to fetch data');
        }
        const tojson = await greet.json();
        setPokemon(tojson);
       
      } catch (error) {
        console.error("error", error);
      
        setPokemon(null); // ✅ Clear previous pokemon data on an error
      } 
    };

    Fetchdata();
  }, [text]);




  
  if (!pokemon) {
    return (
        <>
         <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-3xl text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white bg-teal-400"
        />
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-2xl">Enter a Pokémon name!</p>
      </div>
      </>
    );
  }

  const name = pokemon.name;
  const types = pokemon.types.map((ele) => ele.type.name);
  const img = pokemon.sprites.front_default;

  return (
    <>
      <div className="bg-indigo-400 rounded-xl p-4"
       >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-3xl text-white-600 rounded-lg p-2  border-4 border-teal-400 "
        />
     

      <div className="border border-white flex flex-col items-center mt-8">
        <h1 className="text-white text-center capitalize">{name}</h1>
        <div className="h-30 w-60 bg-white rounded-xl shadow-2xl">
          <img
            src={img}
            alt={name}
            className="h-full w-full relative object-cover"
          />
        </div>
        <h3 className="text-white text-2xl">
          Types: {types.join(', ')}
        </h3>
      </div>
       </div>
    </>
  );
}

export default Pokemon;