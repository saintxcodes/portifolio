import { React } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Work from "./pages/Work"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/work' element={<Work/>}/>
      </Routes>
    </Router>
  )
}

export default App



