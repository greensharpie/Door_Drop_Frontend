import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'


const CreateRest = () => {
  let navigate = useNavigate()
  const initialFormState = {
    name: '',
    description: '',
    image: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  
  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/restaurants/new_restaurant`)
    setFormState(initialFormState)
    navigate('/')
  }
  return (
    <div>CreateRest
      <div className="row justify-content-center">
    <div className="col-md-6 col-sm-12 no-padding ">
    <div className="register-form">
<form  onSubmit={handleSubmit}>
      <div className="col-md-6">
    <label htmlFor="name" className="form-label">Name of Restaurant</label>
    <input 
    onChange={handleChange}
    name = 'name'
    type="text" 
    value={formValues.name}
    className="form-control" 
    id="inputEmail4" 
    required
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="description" className="form-label">Restaurant Description</label>
    <input 
    onChange={handleChange}
    type="text"
    name="description"
    value={formValues.description}
    required
    className="form-control" 
    id="inputPassword4"
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="image" className="form-label">Image</label>
    <input 
    onChange={handleChange}
    name = 'image'
    type="text" 
    value={formValues.image}
    className="form-control" 
    id="inputEmail4" 
    required
    />
  </div>
  <div className="col-6">
    <button 
    type="submit" 
    className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
    </div>
    </div>
  )
}

export default CreateRest