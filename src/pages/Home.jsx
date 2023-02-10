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
    <section id='home'>
    <div className="container home__container">
      {restaurantList.map((restaurant)=> (
        <div className="home__card" key={restaurant?.id}>
        <h2 key={restaurant?.id}>{restaurant.name}</h2>
        <div className='home__image'>
          <img src={restaurant?.image} alt={restaurant?.name}/>
          <div className="home__content">
    {/* <h5>{restaurant?.name}</h5> */}
    <p>{restaurant?.description}</p>
    <Link to={`/restaurant/${restaurant?.id}`} className="btn btn-primary">Go To Restaurant</Link>
    </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  ) : (
    <section id= 'home'>
          <div className='container home__container'>
        <div className="home__image">
  <img src="https://i.imgur.com/RXFwLZe.jpg" alt="home"/>
  <div className="home__content">
    <h5>Door Drop</h5>
    <p>Sign in to begin your order!</p>
    <p>
    <button className="btn btn-primary col-6" onClick={()=> navigate('/login')}>Login</button>
    </p>
  </div>
</div>
      </div>
      </section>
  )
}


export default Home
