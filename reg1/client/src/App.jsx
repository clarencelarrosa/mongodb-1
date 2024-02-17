import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import SearchEmail from './search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/search-email" element={<SearchEmail />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
