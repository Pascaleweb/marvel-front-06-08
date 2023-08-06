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
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [charactersData, setCharactersData] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://site--back-marvel--xwmjbyfl5dg7.code.run/characters`
        );
        // console.log(responseData);
        setCharactersData(responseData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);


                        // const fetchData = async () => {

                        //   const response = await axios.get(
                        //     `https://site--back-marvel--xwmjbyfl5dg7.code.run/characters`
                        //   );

                        //   console.log(response.data);
                        //   setData(response.data.results);
                        //   setLoading(false);
                        // };

                        // useEffect(() => {
                        //   fetchData();
                        // }, []);


                  //   return loading ? (
                  //     <div>Chargement</div>
                  //   ) : (
                  //     <div>
                  //       {/* <div>
                  //         <p>TOUS LES PERSONNAGES</p>
                  //         <p>IMage</p>
                  //         <p>description</p>
                  //       </div> */}

                  //       <div>
                  //         {data.results.map((character, index) => {
                  //           return (
                  //             <div>
                  //               <div>{results.title}</div>
                  //               <div>{results.description}</div>
                  //               <p>{Tous}</p>
                  //             </div>
                  //           );
                  //         })}
                  //       </div>
                  //     </div>
                  //   );
                  // };
                  // export default Characters;



return loading ? (
  <div>Chargement</div>
) : (

    <div>
      {charactersData.results.map((character) => {
        return 
          <CharacterCard key={character._id} character={character} />;
      })}
    </div>

  );
};
export default Characters;




