// Roteamento
import { Routes, Route } from 'react-router-dom'

// Layouts
import DefaultLayout from './layouts/DefaultLayout'

// Páginas
import Home from './pages/Home'

// Estilização
import './App.css'

export default function App() {
  return(
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}