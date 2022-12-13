import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SignInCustomer } from '../services/Auth'

const Login = ({toggleAuthenticated, setCustomer}) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({email: '', password: ''})

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInCustomer(formValues)
    setFormValues({email: '', password: ''})
    console.log('test3', payload)
    setCustomer(payload)
    toggleAuthenticated(true)
    navigate('/')
  }
  return (
    <div>Login
      <form onSubmit={handleSubmit} className="login-form">
          
          {/* Username Section */}
          <section className="email">
            <label className='label' htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="email@email.com"
              value={formValues.email}
              required
            />
          </section>

          {/* Password Section */}
          <section className="password">
            <label className='label' htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </section>
          
          {/* Login Button */}
          <button
            disabled={!formValues.email || !formValues.password}
            className="login-btn"
          >
            Login
          </button>

          {/* Register message & Link */}
          <span className='new-customer'>
            <h3>Haven't made an account? &nbsp;</h3>
            <Link to="/register">
              <h3>Register Here</h3>
            </Link>
          </span>
        </form>
          {/* Admin login */}
          <div className='master-login'> 
            <p>Admin Login:</p>
            <p>Email: <span>admin@admin.com</span></p>
            <p>Password: <span>admin</span></p>
          </div>
    </div>
  )
}

export default Login