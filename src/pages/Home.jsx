import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/home.css";

// import Characters from "./Characters";
import Header from "../components/Header";
// import Comics from "./Comics";

const Home = () => {
  // const [charactersList, setOfferList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Header />
      {/* <Characters />  */}
      {/* <Comics /> */}

      <p>Tous</p>
    </div>
  );
};
export default Home;
