import "../styles/comics.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async () => {
    const response = await axios.get(
      "https://site--back-marvel--xwmjbyfl5dg7.code.run/comic"
    );
    setData(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
            

          return isLoading ? (
            <div>Chargement</div>) :
            (
                <div>
                        {data.map((comic, index) =>{
                            const description = comic.title;
                            
                            return(
                                <Link to={`/comic/${comic.title}`}>
                                {comic.title}
                                </Link>
                            );
                          })}
                </div>
            );      
};
export default Comics;

// https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=F9puV9AdBIfxAw3I
