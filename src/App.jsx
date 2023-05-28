import './assets/App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login/Login'
import Results from './components/Results/Results'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/results" element={<Results/>} />

        </Routes>
        <footer className='attribution'><a href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">Uk/Czech Republic flag icons created by Freepik - Flaticon</a></footer>
    </BrowserRouter>
  )
}

export default App
