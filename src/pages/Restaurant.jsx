import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import { BASE_URL } from '../globals'

const Restaurant = ({customer}) => {

  let {customerId, restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [orderId, setOrderId] = useState([])

  
  useEffect(() => {

    const GetOrdersWithItems = async () => {
      const res = await axios.get(`${BASE_URL}/restaurants/id/${restaurantId}`)
      setRestaurant(res.data)
      console.log('test', res.data)
    }
    const GetOrderById = async () => {
      const res = await axios.get(`${BASE_URL}/orders/order_items/id/${customer.id}`)
      setOrderId(res.data)
      console.log('wow', res.data)
    }
    GetOrdersWithItems()
    GetOrderById()
    
  }, [restaurantId ])
  
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
  console.log('order', orderId)
  
  const toggleOrder = async (e, item) => {
    let itemId = e
    console.log('item3', item)
    await axios.post(`${BASE_URL}/orders/add_order_item/order_id/${item.orderId}/restaurant_id/${restaurantId}/item_id/${item.id}`)
    alert(`${item.name} was added to your order`)
    console.log('item1', itemId)
  }

  return (
    <div key={restaurant.id}>Restaurant
    <div>
    <h1>{restaurant?.name}</h1>
    <p>{restaurant?.description}</p>
    </div>
    <div className='flex-column'>
      <div >
      <button onClick={toggleFavorite} id='addedFav'>Add To Favorites</button>
      <br></br>
        <img src = {restaurant.image} alt={restaurant.image} className='rest-image'/>
      </div>
    </div>
    <div>
      <h2>Menu Items</h2>
      {restaurant.restaurant_items?.map((item)=>(
        
        <div  key={item.id}>
        <div className="row">
          {console.log('item2', item)}
  <div className="col-2">
    <nav id="navbar-example1" className="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav className="nav nav-pills flex-column">
        <a className="nav-link" href="#item-1">{item.name}</a>
        <button onClick={(e) => toggleOrder(e, item)}>Add To Order</button>
      </nav>
    </nav>
  </div>

  <div className="col-4">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example1" data-bs-smooth-scroll="true" className="scrollspy-example-1" tabIndex="1">
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