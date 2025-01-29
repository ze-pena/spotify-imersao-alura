import { PropsWithChildren, ReactNode } from "react"
import MainSidebar from "../../components/sidebars/MainSidebar"
import MainFooter from "../../components/footers/MainFooter"
import "./styles.css"

export default function DefaultLayout({ children }: PropsWithChildren ): ReactNode {
  return(
    <div className="default-layout">
      <div className="default-layout__content">
        <aside className="default-layout__content__aside">
          <MainSidebar />
        </aside>
        
        <main className="default-layout__content__main">
          { children }
        </main>
      </div>

      <footer className="default-layout__footer">
        <MainFooter/>
      </footer>
    </div>
  )
}