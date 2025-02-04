import { ReactNode, useCallback, useEffect } from "react"

import artistService from "../../services/artist"

import ArtistCard from "../../components/cards/ArtistCard"
import { useArtistContext } from "../../contexts/Artist/context"

import "./styles.css"

export default function Home(): ReactNode {
  const { context, setContext } = useArtistContext()
  
  const getArtistList = useCallback(async () => {
    try {
      const response = await artistService.getArtistList()
      setContext(e => ({ ...e, artistList: [...response] }))
    } catch {
      setContext(e => ({ ...e, artistList: [] }))
    }
  }, [setContext])

  useEffect(() => {
    if (!context.artistList.length) getArtistList()
  }, [context, getArtistList])
  
  return(
    <div className="home">
      {context.artistList.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}