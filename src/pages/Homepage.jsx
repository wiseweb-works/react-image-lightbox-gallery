import Picture from '../components/Picture';
import data from '../helper/data';

const Homepage = () => {
  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data.map(({ src: { large }, photographer }, index) => (
          <Picture key={index} src={large} photographer={photographer} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
