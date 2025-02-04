import { ReactNode, KeyboardEvent, useState, useCallback } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons"

import artistService from "../../../services/artist"

import { useArtistContext } from "../../../contexts/Artist/context"

import "./styles.css"

export default function MainHeaderbar(): ReactNode {
  const { setContext } = useArtistContext()
  const [search, setSearch] = useState<string>("")

  const getArtistList = useCallback(async () => {
    const params = { search }

    try {
      const response = await artistService.getArtistList(params)
      setContext(e => ({ ...e, artistList: [...response] }))
    } catch {
      setContext(e => ({ ...e, artistList: [] }))
    }
  }, [search, setContext])

  function handlePressEnter(event: KeyboardEvent) {
    if (event.key === "Enter") getArtistList()
  }

  return (
    <div className="main-headerbar">
      <div className="main-headerbar__actions">
        <button type="button" className="main-headerbar__actions__button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button type="button" className="main-headerbar__actions__button">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="main-headerbar__search">
        <span className="main-headerbar__search__icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handlePressEnter}
          className="main-headerbar__search__input"
        />
      </div>

      <div className="main-headerbar__account">
        <Link to={"/create-account"} className="main-headerbar__account__signup">
          Inscrever-se
        </Link >

        <Link to={"/login"} className="main-headerbar__account__signin">
          Entrar
        </Link>
      </div>
    </div>
  )
}