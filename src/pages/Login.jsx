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
    console.log('payload', payload)
    setCustomer(payload)
    toggleAuthenticated(true)
    setFormValues({email: '', password: ''})
    navigate('/')
  }
  return (
    <section id='login'>
    <div className="container login__container">
    <div className="login-form">
<form  onSubmit={handleSubmit} className='form'>
    <label htmlFor="email" className="form-label">Email</label>
    <input 
    onChange={handleChange}
    name = 'email'
    type="text" 
    value={formValues.email}
    className="form-control" 
    id="inputEmail4" 
    required
    />
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input 
    onChange={handleChange}
    type="password"
    name="password"
    value={formValues.password}
    required
    className="form-control" 
    id="inputPassword4"
    />
    <button 
    type="submit" 
    disabled={
      !formValues.email ||
      !formValues.password
  }
    className="btn btn-primary">Login</button>
</form>
</div>
<div className="extra-options">
  <div className='new-customer'>
    <h4>Haven't made an account? &nbsp;</h4>
    <Link to="/register">
      <h5>Register Here</h5>
    </Link>
  </div>
  <div className='master-login'> 
    <p>Admin Login:</p>
    <p>Email: admin@admin.com</p>
    <p>Password: admin</p>
  </div>
</div>
</div>
    </section>

      
  )
}

export default Login