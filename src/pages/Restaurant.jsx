import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import { BASE_URL } from '../globals'
import { Link } from 'react-router-dom'

const Restaurant = ({customer}) => {

  const [selectedListing, setSelectedListing] = useState([])

  let {customerId, restaurantId} = useParams()
  // let {orderId, restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [orderId, setOrderId] = useState([])
  // const [order, setOrder] = useState([])

  
  useEffect(() => {

    const GetOrdersWithItems = async () => {
      const res = await axios.get(`${BASE_URL}/restaurants/id/${restaurantId}`)
      setRestaurant(res.data)
      console.log('test2', res.data)
    }
    const GetOrderById = async () => {
      const res = await axios.get(`${BASE_URL}/orders/order_items/id/${customer.id}`)
      // const res = await axios.get(`${BASE_URL}/orders/order_items/id/${orderId}`)
      // const res = await axios.get(`${BASE_URL}/customers/id/${customer.id}`)
      setOrderId(res.data.order_items)
      console.log('test1', res.data)
    }
    GetOrdersWithItems()
    GetOrderById()
    
  }, [restaurantId])
  
  const favOption = document.getElementById('addedFav')  
  
  const toggleFavorite = async () => {
    if(favOption.innerHTML === "Remove From Favorites"){
      await axios.delete(`${BASE_URL}/favorites/customer_id/${customer.id}/restaurant_id/${restaurantId}`)
      favOption.innerHTML = 'Add To Favorites'
    } else if(favOption.innerHTML === "Add To Favorites"){
      await axios.post(`${BASE_URL}/favorites/create/customer_id/${customer.id}/restaurant_id/${restaurantId}`)
      favOption.innerHTML = "Remove From Favorites"
    }
  }
  
  const toggleOrder = async (e, item) => {
    let itemId = e
    await axios.post(`${BASE_URL}/orders/add_order_item/order_id/${item.orderId}/restaurant_id/${restaurantId}/item_id/${item.id}`)
    alert(`${item.name} was added to your order`)
  }

  const deleteListing = async (selected) => {
    await setSelectedListing(selected.id)
    await axios.delete(`${BASE_URL}/restaurants/id/${selected.id}`)
    // GetOrdersWithItems()
  }

  return (
    <div className='container text-center' key={restaurant.id}>
    <div className="text-center">
    <div className='col-md-8 col-sm-12 no-padding'>
    <h1>{restaurant?.name}</h1>
    <p>{restaurant?.description}</p>
    </div>
    </div>
    <div className='col-md-4 col-sm-12 no-padding'>
      <div className='col-md-6 col-sm-12 no-padding'>
      <button className="btn btn-primary col-md-6" onClick={toggleFavorite} id='addedFav'>Add To Favorites</button>
      <Link to={`/restaurant/update/${restaurant.id}`}>
                <button className="btn btn-primary col-md-6">Update Restaurant</button>
              </Link>
              <button className="btn btn-primary col-md-6" onClick={() => deleteListing(restaurant)}>
                Delete Restaurant
              </button>
        <img src = {restaurant.image} alt={restaurant.image} className='rest-image'/>
      </div>
    </div>
    <div className="col-md-6 col-sm-12 no-padding">
      <h2>Menu Items</h2>
      {restaurant.restaurant_items?.map((item)=>(
        
        <div  key={item.id}>
        <div className="row">
  <div className="col-8">
    <nav id="navbar-example1" className="h-100 flex-column align-items-stretch pe-8 border-end">
      <nav className="nav nav-pills flex-column">
      <img src = {item.image} alt={item.image} className='rest-image'/>
        <a className="nav-link" href="#item-1">{item.name}</a>
        <button className="btn btn-primary col-md-6" onClick={(e) => toggleOrder(e, item)}>Add To Order</button>
      </nav>
    </nav>
  </div>

  <div className="col-4">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example1" data-bs-smooth-scroll="true" className=" flex-column align-items-stretch pe-10" tabIndex="1">
      <div id="item-1">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  </div>
</div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Restaurant