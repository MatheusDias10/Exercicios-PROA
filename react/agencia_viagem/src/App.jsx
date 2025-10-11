import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import GrandCanion from './componentes/GrandCanion'
import Aruba from './componentes/Aruba'
import Muralhas from './componentes/Muralhas'

function App() {

  return (
    <>
      <main>
          <Router>
            <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Escocia' element={<Escocia />} />
                <Route path='/Grand' element={<GrandCanion />} />
                <Route path='/Muralhas' element={<Muralhas />} />
                <Route path='Aruba' element={<Aruba />} />
            </Routes>
          <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
