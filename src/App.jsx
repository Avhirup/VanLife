import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='logo'>VANLIFE</Link>
        <nav>
          <Link to="/about" className='navBtn'>About</Link>
          <Link to="/" className='navBtn'>Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <footer>
        <p>made by ♥ Avhi</p>
      </footer>
    </BrowserRouter>

  )
}
