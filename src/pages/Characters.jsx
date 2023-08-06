// import "../styles/characters.css";

// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Characters =() =>{
//     const [data, setData] = useState(null);
//     const[loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         const response = await axios.get("https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=F9puV9AdBIfxAw3I");
//         console.log(response.data);
//     };

//     useEffect(() =>{
//         fetchData();
//     }, []);

//     return (
//         <div>
//             {/* <Link to={`/characterld/${characterld.name}`} key={index}></Link> */}
//             TOUS LES PERSONNAGES
//             <div>
//                <p>Nom du personnage</p>
//                <p>IMage</p>
//                <p>description</p>
//             </div>
//         </div>
//     )

// }
// export default Characters;

// -----------------------BONNE VERSION FONCTIONNE ---------------------------------------------

import "../styles/characters.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Characters = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=F9puV9AdBIfxAw3I`);

    const response = await axios.get(
      `https://site--back-marvel--xwmjbyfl5dg7.code.run/character`
    );

    // const response = await axios.get(`http://localhost:5174/characters`);

    console.log(response.data);
    setData(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div>Chargement</div>
  ) : (
    <div>
      <div>
        <p>TOUS LES PERSONNAGES</p>
        <p>IMage</p>
        <p>description</p>
      </div>

      <div>
        {data.map((characters) => {
          return (
            <div>
              <div>{characters.name}</div>
              <p>{Tous}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Characters;
