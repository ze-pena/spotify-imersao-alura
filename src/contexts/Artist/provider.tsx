import { PropsWithChildren, ReactNode, useState } from "react"
import { providerData, ArtistContext } from "./context"

export default function ArtistProvider({ children }: PropsWithChildren): ReactNode {
  const [ context, setContext ] = useState(providerData.context)
  return (
    <ArtistContext.Provider value={{ context, setContext }}>
      {children}
    </ArtistContext.Provider>
  )
}