import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BASE_URL} from '../globals'

const Home = ({customer, authenticated}) => {
  let navigate = useNavigate()

  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    const getFavoriteRest = async () => {
      const res = await axios.get(`${BASE_URL}/favorites/customer_favorites}`)
      console.log('test2', res.data)
      setFavorite(res.data)
    }
    getFavoriteRest()
  }, [])
  return customer && authenticated ? (
    <div>Home
      <section className='user-favorites'> 
                    <h1 className='text-4xl font-1-bold pb-6 pt-20'>You're Favorite Restaurants</h1>
                    <div className='trending-container'>
                            <Link to={`/customer_id/${customer?.id}/restaurant/${favorite.id}`} key={favorite.id}>
                                <img src={favorite.image} alt={favorite.name} className="favorite-img" />
                                <h5 className='fav-rest-name'>{favorite.name}</h5>     
                            </Link>
                    </div>
                </section>
    </div>
  ) : (
    <div>
      <h3> Log in to gain access! </h3>
    </div>
  )
}

export default Home