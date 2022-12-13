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
    <div className="row justify-content-center">
    <div className="col-md-6 col-sm-12 no-padding ">
    <div className="login-form">
<form  onSubmit={handleSubmit}>
      
  <div className="col-md-6">
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
  </div>
  <div className="col-md-6">
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
  </div>
  <div className="col-6">
    <button 
    type="submit" 
    disabled={
      !formValues.email ||
      !formValues.password
  }
    className="btn btn-primary">Login</button>
  </div>
</form>
</div>
</div>
<div>
<span className='new-customer'>
            <h3>Haven't made an account? &nbsp;</h3>
            <Link to="/register">
              <h3>Register Here</h3>
            </Link>
          </span>
          {/* Admin login */}
          <div className='master-login'> 
            <p>Admin Login:</p>
            <p>Email: <span>admin@admin.com</span></p>
            <p>Password: <span>admin</span></p>
          </div>
</div>
    </div>

      
  )
}

export default Login