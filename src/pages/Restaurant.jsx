import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import { BASE_URL } from '../globals'

const Restaurant = () => {

  let {customerId, restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [orderId, setOrderId] = useState([])

  useEffect(() => {
    const GetOrdersWithItems = async () => {
      const res = await axios.get(`${BASE_URL}/restaurants/id/${restaurantId}`)
      setRestaurant(res.data)
    }

    const GetOrderById = async () => {
      const res = await axios.get(`${BASE_URL}/orders/order_items/id/${customerId}`)
      setOrderId(res.data)
      console.log('order by id', res.data)
    }

    GetOrdersWithItems()
    GetOrderById()
    
  }, [orderId])

  const favOption = document.getElementById('addedFav')  

  const toggleFavorite = async () => {
    if(favOption.innerHTML === "Remove From Favorites"){
      await axios.delete(`${BASE_URL}/favorites/customer_id/${customerId}/restaurant_id/${restaurantId}`)
      favOption.innerHTML = 'Add To Favorites'
    } else if(favOption.innerHTML === "Add To Favorites"){
      await axios.post(`${BASE_URL}/favorites/create/customer_id/${customerId}/restaurant_id/${restaurantId}`)
      favOption.innerHTML = "Remove From Favorites"
    }
  }

  const toggleCart = async (e) => {
    let itemId = e
    await axios.post(`${BASE_URL}/orders/add_order_item/order_id/${orderId.id}/restaurant_id/${restaurantId}/item_id/${itemId.id}`)
    alert(`${itemId.name} was added to your cart`)

    // if(cartOption.innerText === "Remove From Cart"){
    //   await axios.delete(`${BASE_URL}/favorites/user_id/${userId}/restaurant_id/${restaurantId}`)
    //   alert(`${itemId.name} was deleted from your cart`)
    // } else if(cartOption.innerText === "Remove From Cart"){
    //   await axios.post(`${BASE_URL}/orders/add_order_item/order_id/${orderId.id}/restaurant_id/${restaurantId}/item_id/${itemId.id}`)
    //   alert(`${itemId.name} was added to your cart`)
    // }
  }

  return (
    <div key={restaurant.id}>Restaurant
    <section>
    <h1>{restaurant?.name}</h1>
    <p>{restaurant?.description}</p>
    </section>
    <section>
      <div className='rest-image'>
        <img src = {restaurant.image} alt={restaurant.image}/>
        <button onClick={toggleFavorite} id='addFav'>Add To Favorites</button>
      </div>
    </section>
    <section>
      <h2>Items</h2>
      {restaurant.restaurant_items?.map((item) =>{
        <span className='item-container' key={item.id}>
          <img src = {item?.image} alt={item?.name}/>
          <p>{item?.name}</p>
          <button onClick={()=> toggleCart(item)} id='order-option'>Add to Order </button>
        </span>
      })}
    </section>
    </div>
  )
}

export default Restaurant