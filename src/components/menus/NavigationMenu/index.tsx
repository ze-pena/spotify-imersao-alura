import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons'
import SpotifyLogo from "../../../assets/icons/logo-spotify.png"
import "./styles.css"

export default function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <div className="navigation-menu__logo">
        <a href="">
          <img src={SpotifyLogo} alt="Música para todos os gostos" />
        </a>
      </div>

      <ul className="navigation-menu__links">
        <li className="navigation-menu__links__item">
          <a href="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Inicio</span>
          </a>
        </li>

        <li className="navigation-menu__links__item">
          <a href="/search">
            <FontAwesomeIcon icon={faSearch} />
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}