//* la pagina que muestra la lista del pokemon
import { useState, useEffect } from "react";
import "../Css/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ImagenProfile from "../Img/pokebola.png";
import Img from "../Img/cd94410c6d8cec413c9a5e095bf4eb77.png";
function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemon(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log("Error fetching Pokemon list", error);
      });
  }, []);

  function extractIdFromUrl(url) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  }

  return (
    <div className="home-container">
      <div className="container">
        <img src={Img} alt="" className="ImgTitle" />
        <div className="table">
          {pokemon.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-item">
              <Link to={`/pokemon/${extractIdFromUrl(pokemon.url)}`}>
                <img
                  src={ImagenProfile}
                  alt=""
                  className="Img"
                  style={{ zIndex: "1" }}
                />
                {pokemon.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
