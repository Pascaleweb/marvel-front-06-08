
import "../styles/characters.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [charactersData, setCharactersData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-marvel--xwmjbyfl5dg7.code.run/characters`
        );
        // console.log(responseData);
        setCharactersData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

return loading ? (
  <div>Chargement</div>
) : (

    <div>
      {charactersData.results.map((characters) => {
        return 
          <CharacterCard key={characters._id} characters={characters} />;
      })}
    </div>

  );
};
export default Characters;




