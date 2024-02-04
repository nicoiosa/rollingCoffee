import banner from "../../assets/banner.png";
import Grid from "../../components/Grid";
const Home = () => {
  return (
    <div className="myMain">
      <div className="trimmed-container">
        <img
          src={banner}
          alt="Foto de la cafeteria"
          className="img-fluid trimmed-image"
        />
      </div>
      <Grid />
    </div>
  );
};

export default Home;
