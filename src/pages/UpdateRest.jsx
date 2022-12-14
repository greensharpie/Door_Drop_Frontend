import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import e from 'express'

const UpdateRest = () => {
  let navigate = useNavigate()
  let { restaurant_id} = useParams()
  const [formState, setFormState] = useState()
  const [restDetails, setRestDetails] = useState([])

  const UpdateRestDetails = async () => {
    const res = await axios.get(`${BASE_URL}/restaurants/id/${restaurant_id}`)
    setRestDetails(res.data)
    setFormState({
      name: res.data.name,
      description: res.data.description,
      image: res.data.description
    })
  }

  useEffect(() => {
    UpdateRestDetails()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/restaurants/id/${restaurant_id}`, formState)
    navigate('/')
  }
  return (
    <div>UpdateRestDetails
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
    value={formValues?.name}
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
    value={formValues?.description}
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
    value={formValues?.image}
    className="form-control" 
    id="inputEmail4" 
    required
    />
  </div>
  <div className="col-6">
    <button 
    type="submit" 
    className="btn btn-primary">Update Restaurant</button>
  </div>
</form>
</div>
</div>
    </div>
    </div>
  )
}

export default UpdateRest