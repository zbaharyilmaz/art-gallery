import "./Artworks.scss"

const Artwork = ({work}) => {
  return (
    <div className="works">
        <img src={work.image} alt={work.title} />
        <div>
          <h5>{work.title}, {work.year}</h5>
        <p>{work.description}</p>
        </div>
        
    </div>
  );
};

export default Artwork;

