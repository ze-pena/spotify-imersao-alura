type GET_ARTISTS_PARAMS = {
  search: string
}

type GET_ARTISTS_RESPONSE = Artist[]

const baseUrl = "http://localhost:4001"

export default {
  getArtistList: async (params?: GET_ARTISTS_PARAMS): Promise<GET_ARTISTS_RESPONSE> => {
    let query = ""

    if (params && params.search) query = `?name_like=${params.search.toLowerCase()}`

    const request = await fetch(`${baseUrl}/artists${query}`)
    return request.json()
  }
}