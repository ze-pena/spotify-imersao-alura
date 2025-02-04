import { createContext, useContext, Dispatch, SetStateAction } from "react"

type ContextType = { artistList: Artist[] }

type ProviderType = {
  context: ContextType
  setContext: Dispatch<SetStateAction<ContextType>>
}

export const providerData: ProviderType = {
  context: { artistList: [] },
  setContext: () => {}
}

export const ArtistContext = createContext<ProviderType>(providerData)
export const useArtistContext = (): ProviderType => useContext<ProviderType>(ArtistContext)