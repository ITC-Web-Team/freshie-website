import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import councils from '../data/councils';

const CouncilPage = () => {
  const { councilId } = useParams();
  const council = councils.find(c => c.id === councilId);

  if (!council) return <p>Not Found</p>;

  return (
    <div className="council-page">
      <h2>{council.name}</h2>
      <div className="cards-container">
        {council.clubs.map(club => (
          <Card
            key={club.id}
            title={club.name}
            image={club.image}
            link={`/council/${council.id}/club/${club.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CouncilPage;
