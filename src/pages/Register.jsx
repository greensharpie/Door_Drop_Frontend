import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterCustomer } from '../services/Auth'
import { BASE_URL } from '../globals'


const Register = () => {
    const initialState = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      password:'',
      confirmPassword: ''
    }

    const [formValues, setFormValues] = useState(initialState)

    let navigate = useNavigate()

    const handleChange = (e) => {
      setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const [customerData, setCustomerData] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const res = await RegisterCustomer({
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        email: formValues.email,
        password: formValues.password
      })
      setCustomerData(res.id)
      await axios.post(`${BASE_URL}/orders/customer_id/${res.id}`)

      setFormValues(initialState)
      navigate('/login')
    }
  return (
    
    <div className="row justify-content-center">
    <div className="col-md-6 col-sm-12 no-padding ">
    <div className="register-form">
<form  onSubmit={handleSubmit}>
      <div className="col-md-6">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input 
    onChange={handleChange}
    name = 'firstName'
    type="text" 
    value={formValues.firstName}
    className="form-control" 
    id="inputEmail4" 
    required
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input 
    onChange={handleChange}
    type="text"
    name="lastName"
    value={formValues.lastName}
    required
    className="form-control" 
    id="inputPassword4"
    />
  </div>
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
  <div className="col-md-6">
    <label htmlFor="address" className="form-label">Address</label>
    <input 
    onChange={handleChange}
    type="text"
    name="address"
    value={formValues.address}
    required
    className="form-control" 
    id="inputAddress" 
    placeholder="1234 Main St, Lincolnton, NC"
    />
  </div>
  <div className="btn btn-primary col-6">
    <button 
    type="submit" 
    disabled={
      !formValues.email ||
      (!formValues.password &&
      formValues.confirmPassword === formValues.password)
  }
    className="btn btn-primary">Register</button>
  </div>
</form>
</div>
</div>
    </div>
  )
}

export default Register
