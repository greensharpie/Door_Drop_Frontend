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
    }

    // const GetOrderById = async () => {
    //   const res = await axios.get(`${BASE_URL}/orders/order_items/id/${customerId}`)
    //   setOrderId(res.data)
    //   console.log('order by id', res.data)
    // }

    GetOrdersWithItems()
    // GetOrderById()
    
  }, [restaurantId, customerId])


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

  // const toggleOrder = async () => {
  //   let itemId = e
  //   await axios.post(`${BASE_URL}/orders/add_order_item/order_id/${orderId.id}/restaurant_id/${restaurantId}/item_id/${itemId.id}`)
  //   alert(`${itemId.name} was added to your order`)

  //   if(favOption.innerText === "Remove From Favorites"){
  //     await axios.delete(`${BASE_URL}/favorites/user_id/${customerId}/restaurant_id/${restaurantId}`)
  //     alert(`${itemId.name} was deleted from your favorites`)
  //   } else if(favOption.innerText === "Remove From Favorite"){
  //     await axios.post(`${BASE_URL}/orders/add_order_item/order_id/${orderId.id}/restaurant_id/${restaurantId}/item_id/${itemId.id}`)
  //     alert(`${itemId.name} was added to your favorites`)
  //   }
  // }

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
  <div className="col-2">
    <nav id="navbar-example1" className="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav className="nav nav-pills flex-column">
        <a className="nav-link" href="#item-1">{item.name}</a>
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
      
      {/* {restaurant.restaurant_items?.map((item) => {
        <div classNameName='item-container' key={item.id}>
          <h3>{item?.name}</h3>
          <img src = {item?.image} alt={item?.name}/>
          <p>{item?.name}</p>
          <button onClick={()=> toggleOrder(item)} id='order-option'>Add to Order </button>
        </div>
      })} */}
    </div>
    </div>
  )
}

export default Restaurant