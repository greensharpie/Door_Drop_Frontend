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

    <div className="vstack gap-3">
      {restaurantList.map((restaurant)=> (
        <div className="res-card" key={restaurant?.id}>
        <h2 key={restaurant?.id}>{restaurant.name}</h2>
        <div>
          <img src={restaurant?.image} className="card-img-top" alt={restaurant?.name}/>
          <div className="card-body">
    <h5 className="card-title">{restaurant?.name}</h5>
    <p className="card-text">{restaurant?.description}.</p>
    <Link to={`/restaurant/${restaurant?.id}`} className="btn btn-primary">Go Restaurant</Link>
    </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
          <div className='not-logged-in'>
        <h3>You must be logged in!</h3>
        <button onClick={()=> navigate('/login')}>Login</button>
      </div>
  )
  
  
  
  
}


export default Home



//   customer && authenticated ?(
// <div>
//   <div>
//     {restaurantList?.map((restaurant) => (
//       <div className="card" style="width: 18rem;" key={restaurant?.id}>
//   <img src={restaurant?.image} className="card-img-top" alt={restaurant?.name}/>
//   <div className="card-body">
//     <h5 className="card-title">{restaurant?.name}</h5>
//     <p className="card-text">{restaurant?.description}.</p>
//     <Link to={`/restaurant/${restaurant?.id}`} className="btn btn-primary">Go Restaurant</Link>
//    </div>
//  </div>
//     ))}
//     </div>
//     </div>
//   )
//     : (
//       <div className='not-logged-in'>
//         <h3>You must be logged in!</h3>
//         <button onClick={()=> navigate('/login')}>Login</button>
//       </div>
//     )