import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Description</Link>
        </li>
        <li className="nav__item">
          <Link to="/world">World</Link>
        </li>
        <li className="nav__item">
          <Link to="/country">Country</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
