
import './Card.css';
import { FiExternalLink } from 'react-icons/fi';

export default function Card({
  name,
  description,
  icon,
  type,
  image,
  link
}) {
  return (
    <article className="card-container">

      <div className="card-top">
        <div className="card-icon">{icon}</div>
        <span className="card-type">{type}</span>
      </div>

      <div className="card-content">
        <div className="card-image">
          {image ? (
            <img src={image} alt={`${name} preview`} />
          ) : (
            <div className="image-placeholder">
              No preview available
            </div>
          )}
        </div>

        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <button
          type="button"
          className="open-button"
          onClick={link}
        >
          View Details <FiExternalLink />
        </button>
      </div>

    </article>
  );
}
