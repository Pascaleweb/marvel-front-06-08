import "../styles/card.css";


const Card = ({element}) => {

    const NewCard = {
        _id: element._id,
        name: element.name ? element.name : element.title,
        description: element.description,
        thumbnail: {
          path: element.thumbnail.path,
          extension: element.thumbnail.extension,
        },
      };


    return (
        <div>

        <p>Personnage</p>
            <img
          src={
            element.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? avatar_default
              : `${element.thumbnail.path}.${element.thumbnail.extension}`
          }
          alt="poster element"
        />

            <h3>{element.title}</h3>

             <h3 className="card-description">{element.description}</h3>

        </div>
    )
}

export default Card;