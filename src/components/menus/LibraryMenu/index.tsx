import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

export default function LibraryMenu() {
  return(
    <div className="library-menu">
      <div className="library-menu__label">
        <div className="library-menu__label__link">
          <Link to="/library">
            <FontAwesomeIcon icon={faBook} />
            <span>Sua biblioteca</span>
          </Link>
        </div>

        <button
          className="library-menu__label__button" 
          type='button'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="library-menu__content">
        <h4>Crie sua primeira playlist</h4>
        <p>É fácil, vamos te ajudar.</p>
        <button type="button">Criar playlist</button>
      </div>

      <div className="library-menu__cookies">
        <Link to="/cookies">Cookies</Link>
      </div>

      <div className="library-menu__language">
        <button type="button" className="library-menu__language__button">
          <FontAwesomeIcon icon={faGlobe} />
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
  )
}