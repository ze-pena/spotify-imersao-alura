import NavigationMenu from "../../menus/NavigationMenu"
import LibraryMenu from "../../menus/LibraryMenu"
import "./styles.css"

export default function MainSidebar() {
  return(
    <div className="main-sidebar">
      <NavigationMenu />
      <LibraryMenu />
    </div>
  )
}