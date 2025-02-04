import { ReactNode } from "react"

import MainSidebar from "../../components/sidebars/MainSidebar"
import MainHeaderbar from "../../components/headers/MainHeaderbar"
import MainFooter from "../../components/footers/MainFooter"

import ArtistProvider from "../../contexts/Artist/provider"

import "./styles.css"

export default function DefaultLayout(): ReactNode {
  return(
    <div className="default-layout">
      <div className="default-layout__content">
        <aside className="default-layout__content__aside">
          <MainSidebar />
        </aside>
        
        <div className="default-layout__content__main">
          <header className="default-layout__content__main__header">
            <MainHeaderbar />
          </header>

          <main className="default-layout__content__main__children">
            <ArtistProvider />
          </main>
        </div>
      </div>

      <footer className="default-layout__footer">
        <MainFooter/>
      </footer>
    </div>
  )
}