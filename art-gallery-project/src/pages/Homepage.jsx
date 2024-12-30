import Artwork from "../components/Artworks";

const Homepage = ({artwork}) => {
  return (
    <div>
        <h1>Art Gallery</h1>
        {
            artwork.map((work)=>(
            <Artwork key={work.id} work={work}/>  
            ))
        }
    </div>
  );
};

export default Homepage;