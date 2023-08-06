import "../styles/comics.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [comicsData, setComicsData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(
      `https://site--back-marvel--xwmjbyfl5dg7.code.run/comics`
    );
    setComicsData(response.data);
    setIsLoading(false);
  };
    fetchData();
  }, []);
            

      return isLoading ? (
            <div>Chargement</div>) :
            (
                <div>
                  {comicsData.results.map((comics) => {
                  return <ComicsCard key={comics._id} comics={comics} />
                  })}
              </div>
    );      
};
export default Comics;

// https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=F9puV9AdBIfxAw3I
