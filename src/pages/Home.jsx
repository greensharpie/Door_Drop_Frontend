import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

const Home = ({customer, authenticated}) => {
  let navigate = useNavigate()

  const [restaurantList, setRestaurant] = useState([])

  const GetAllRest = async () => {
    const res = await axios.get(`${BASE_URL}/restaurants/get_all`)
    setRestaurant(res.data)
  }

  useEffect(() => {
    // const getAllRest = async () => {
    //   const res = await axios.get(`${BASE_URL}/restaurants/get_all}`)
    //   console.log('test2', res.data)
    //   setRestaurant(res.data)
    // }
    GetAllRest()
  }, [])

  return customer && authenticated ? ( 

    <div className="res-card">
      {restaurantList.map((restaurant)=> (
        <div className="res-card" key={restaurant?.id}>
        {/* <h2 key={restaurant?.id}>{restaurant.name}</h2> */}
        <div className='rest-card'>
          <img src={restaurant?.image} className="card-img-top" alt={restaurant?.name}/>
          <div className="res-card">
    <h5 className="card-title">{restaurant?.name}</h5>
    <p className="card-text">{restaurant?.description}</p>
    <Link to={`/restaurant/${restaurant?.id}`} className="btn btn-primary">Go To Restaurant</Link>
    </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
          <div className='res-card'>
        <div className="card mb-3">
  <img src="https://i.imgur.com/RXFwLZe.jpg" className="card-img-top" alt="display-image"/>
  <div className="card-body">
    <h5 className="card-title">Door Drop</h5>
    <p className="card-text">Sign in to begin your order!</p>
    <p className="card-text"><small className="text-muted">
    <button className="btn btn-primary col-6" onClick={()=> navigate('/login')}>Login</button>
      </small></p>
  </div>
</div>
      </div>
  )
}


export default Home
