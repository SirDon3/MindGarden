import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Garden from './pages/Garden'
import Header from './components/Header'
import Todo from './pages/Todo'

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-green-50 text-gray-800 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
