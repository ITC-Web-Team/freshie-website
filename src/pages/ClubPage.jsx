import { useParams } from 'react-router-dom';
import councils from '../data/councils';

const ClubPage = () => {
  const { councilId, clubId } = useParams();
  const council = councils.find(c => c.id === councilId);
  const club = council?.clubs.find(club => club.id === clubId);

  if (!club) return <p>Club not found</p>;

  return (
    <div className="club-page">
      <h2>{club.name}</h2>
      <p>{club.description}</p>
    </div>
  );
};

export default ClubPage;
