import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterCustomer } from '../services/Auth'


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
      console.log('test1', res.id)
      await axios.post(`http://localhost:3001/api/orders/customer_id/${res.id}`)

      setFormValues(initialState)
      navigate('/login')
    }
  return (
    <div>Register
      <form className="Register-form" onSubmit={handleSubmit}>
        {/*  Name */}
        <section className="Name">                     
            <label className="firstName" htmlFor='firstName'>First Name:</label>
            
            <input
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
                required
            />
        </section>

        <section className="Name">                     
            <label className="lastName" htmlFor='lastName'>Last Name:</label>
            
            <input
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formValues.lastName}
                required
            />
        </section>

        <section className="address">                     
            <label className="address" htmlFor='address'>Street Name, City, State</label>
            
            <input
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="123 Street, Charlotte, NC"
                value={formValues.address}
                required
            />
        </section>
        
        {/* Email */}
        <section className="email">          
            <label className="email" htmlFor='email'>email</label>           
            <input
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="email"
                value={formValues.email}
                required
            />           
        </section>
        
        {/* password inputs */}
        <section className="password">           
            <label className="password" htmlFor='password'>Password</label>         
            <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                required
            />
            {/* confirm password */}
            <label className="confirmPassword" htmlFor='confirmPassword'>Confirm Password</label>
            <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                required
            />
        </section>

        <div className="submit-button-container">
            <button
            type="submit"
            className="submit-btn"
            disabled={
                !formValues.email ||
                (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
            >
            Submit
            </button>
        </div>
        </form>
    </div>

  )
}

export default Register