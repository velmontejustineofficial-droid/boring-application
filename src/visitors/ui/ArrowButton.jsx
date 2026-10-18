import './css/ArrowButton.css';

import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export default function ArrowButton() {
  return (
        <div className="back-home-wrapper">
        <Link to="/" className="back-home-btn">
          <FaArrowLeft />
          <span>Back</span>
        </Link>
      </div>
  )
}
