import { ReactNode } from "react"

import "./styles.css"

type Props = {
  artist: Artist
}

export default function ArtistCard({ artist }: Props): ReactNode {
  const { name, genre, urlImg } = artist

  return (
    <div className="artist-card">
      <picture className="artist-card__picture">
        <img src={urlImg} alt="Imagem do artista" />
      </picture>

      <h4 className="artist-card__name">
        {name}
      </h4>

      <h6 className="artist-card__genre">
        {genre}
      </h6>
    </div>
  )
}