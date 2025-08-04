import { useParams } from 'react-router-dom';
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
          <div key={club.id} className="club-card">
            <img src={club.image} alt={club.name} className="club-image" />
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            <div className="club-socials">
              {club.socials.linkedin && (
                <a href={club.socials.linkedin} target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in" />
                </a>
              )}
              {club.socials.instagram && (
                <a href={club.socials.instagram} target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" />
                </a>
              )}
              {club.socials.facebook && (
                <a href={club.socials.facebook} target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
              )}
              {club.socials.website && (
                <a href={club.socials.website} target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt" />
                </a>
              )}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default CouncilPage;
