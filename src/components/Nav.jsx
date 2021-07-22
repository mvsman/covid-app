import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const nav = ['Description', 'World', 'Country'];
  const links = ['/', '/world', '/country'];
  const [active, setActive] = useState(nav[0]);

  const onActive = (i) => setActive(i);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {nav.map((elem, i) => (
          <li key={elem} onClick={() => onActive(i)}>
            {
              <Link to={links[i]} className={`nav__item underline ${active === i ? 'active' : ''}`}>
                {elem}
              </Link>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
