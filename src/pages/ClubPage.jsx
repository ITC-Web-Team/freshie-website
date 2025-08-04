import { useParams } from "react-router-dom";
import councils from '../data/councils';
import '../components/Card.css';

const ClubPage = () => {
  const { councilId, clubId } = useParams();
  const council = councils.find(c => c.id === councilId);
  const club = council?.clubs.find(club => club.id ===clubId);

  if(!club) return <p>Club not found</p>;

  return (
    <div className="club-page-container">
      <div className="club-card">
        <div className="club-card-top">
          <span className="club-council">{councilId}</span>
        </div>

        <div className="club-card-content">
          <img src={club.image} alt={club.name} className="club-image" />
          <h2 className="club-name">{club.name}</h2>
          <p className="club-description">{club.description}</p>
        </div>

        <div className="club-card-socials">
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

        <div className="club-card-bottom-rotated">
          <span>{councilId}</span>
        </div>
      </div>
    </div>
  );
};

export default ClubPage;