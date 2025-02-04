import { ReactNode, useState } from "react"
import { Outlet } from "react-router-dom"
import { providerData, ArtistContext } from "./context"

export default function ArtistProvider(): ReactNode {
  const [ context, setContext ] = useState(providerData.context)
  return (
    <ArtistContext.Provider value={{ context, setContext }}>
      <Outlet />
    </ArtistContext.Provider>
  )
}