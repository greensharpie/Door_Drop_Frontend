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
  return (
    <div>Home
      <section className='user-restaurants'> 
                    <h1 className='text-4xl font-1-bold pb-6 pt-20'>Your Restaurants</h1>
                    <div className='trending-container'>
                      {restaurantList.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant?.id}`} key={restaurant.id}>
                                <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
                                <h5 className='fav-rest-name'>{restaurant.name}</h5>     
                            </Link>
                      ))}
                            
                    </div>
                </section>
    </div>
  ) 
  
}

export default Home


// return customer && authenticated ? (
//   <div>Home
//     <section className='user-restaurants'> 
//                   <h1 className='text-4xl font-1-bold pb-6 pt-20'>You're restaurant Restaurants</h1>
//                   <div className='trending-container'>
//                           <Link to={`/customer_id/${customer?.id}/restaurant/${restaurant.id}`} key={restaurant.id}>
//                               <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
//                               <h5 className='fav-rest-name'>{restaurant.name}</h5>     
//                           </Link>
//                   </div>
//               </section>
//   </div>
// ) 
// : (
//   <div>
//     <h3> Log in to gain access! </h3>
//   </div>
// )
// }