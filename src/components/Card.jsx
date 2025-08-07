import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ title, image, link }) => {
  return (
    <Link to={link} className='card-link'>
      <div className='card'>
        <img src={image} alt={title} className='card-img' />
        
      </div>
    </Link>
  );
};

export default Card;