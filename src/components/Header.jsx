import { Link } from 'react-router-dom';
import './Header.css'; // Vi forbinder designet her

export default function Header() {
  return (
    <header className="header">
      <nav>
        {/* Vi bruger en liste (ul/li) fordi det er semantisk korrekt for en menu */}
        <ul className="linklist">
          <li>
            <Link to="/" className="link">Trends</Link>
          </li>
          <li>
            <Link to="/boernepanel" className="link">Børnepanel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}