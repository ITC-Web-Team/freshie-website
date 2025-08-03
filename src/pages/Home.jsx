import Card from '../components/Card';
import councils from '../data/councils';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>GYMKHANA</h1>
      <p>The Students Gymkhana along with its infrastructure is an organization to foster and develop all student activities in the Institute. It aims at promising and developing organizational abilities in students. It has been successful over the years in evolving a well-informed, articulate and participatory student community life. It has been instrumental in identifying student issues and promoting discussions on them. Functions as the office for all election and nominations of students for gymkhana activities. Visit their website <span><a href='https://gymkhana.iitb.ac.in'>here</a></span></p>

      <div className="cards-container">
        {councils.map(council => (
          <Card
            key={council.id}
            title={council.name}
            image={council.image}
            link={`/council/${council.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
