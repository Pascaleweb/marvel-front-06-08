import { Link } from "react-router-dom";

import "../styles/comicsCard.css";


const ComicsCard = ({ comics }) => {
  return (
    <Link to={`/comic/${comics._id}`}>
      <article key={comics._id}>
        <section className="bande">
          <div>
            <img
              src={
                comics.thumbnail.path + "." + comics.thumbnail.extension
              }
              alt={comics.name}
            />
          </div>

          <div className="bande-titre">
            <h2>{comics.title}</h2>
            <p>{comics.description}</p>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default ComicsCard;