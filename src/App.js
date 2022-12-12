import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { CheckSession } from './services/Auth'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [customer, setCustomer] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setCustomer(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const customer = await CheckSession()
    setCustomer(customer)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          authenticated={authenticated}
          customer={customer}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setCustomer}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/"
            element={<Home customer={customer} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
