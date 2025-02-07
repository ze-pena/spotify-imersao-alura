import { ReactNode } from "react"

import MainSidebar from "../../components/sidebars/MainSidebar"
import MainHeaderbar from "../../components/headers/MainHeaderbar"
import MainFooter from "../../components/footers/MainFooter"

import ArtistProvider from "../../contexts/Artist/provider"
import { Outlet } from "react-router-dom"

import "./styles.css"

export default function DefaultLayout(): ReactNode {
  return(
    <ArtistProvider>
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
              <Outlet />
            </main>
          </div>
        </div>

        <footer className="default-layout__footer">
          <MainFooter/>
        </footer>
      </div>
    </ArtistProvider>
  )
}