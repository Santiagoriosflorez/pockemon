import "../Css/Pokemon.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemonDetails(res.data);
      })
      .catch((error) => {
        console.log("Error fetching Pokemon details", error);
      });
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="thBody">
      <div className="Container">
        <h2 className="text">{pokemonDetails.name}</h2>
        <img
          src={pokemonDetails.sprites.front_default}
          alt="Pokemon"
          className="img-fluid"
        />
        <div>
          {pokemonDetails && (
            <div className="list">
              <ul className="list-group">
                <h2 className="text-2">Habilidades:</h2>
                {pokemonDetails.abilities.map((ability, index) => (
                  <li key={index} className="list-group-item ">
                    <span>{ability.ability.name}</span>
                    <span className="badge">
                      {ability.is_hidden ? "Hidden" : "Normal"}
                    </span>
                  </li>
                ))}
                <h3 className="text-2">peso</h3>
                <div className="list-group-item">
                  <span>{(pokemonDetails.weight / 10).toFixed(1)} Kg</span>
                </div>
                <h3 className="text-2">altura</h3>
                <div className="list-group-item">
                  <span>{pokemonDetails.height} M</span>
                </div>
              </ul>
            </div>
          )}
          <Link to="/">
            <button className="btn-icon">
              <FaChevronCircleLeft className="btn" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
