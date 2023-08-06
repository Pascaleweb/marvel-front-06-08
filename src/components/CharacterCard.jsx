import "../styles/characterCard.css";

import { Link } from "react-router-dom";


const CharacterCard = ({ characters }) => {
  return (
    <Link to={`/characters/${characters._id}`}>
      <article key={characters._id}>
        <section>
          <div>
            <img
              src={
                characters.thumbnail.path + "." + characters.thumbnail.extension
              }
              alt={characters.name}
            />
          </div>

          <div>
            <h2>{characters.name}</h2>
            <p>{characters.description}</p>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default CharacterCard;