import { Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import Home from './pages/Home'
import Students from './pages/Students'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
