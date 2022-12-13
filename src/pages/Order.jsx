import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'


const Order = () => {

  let {customerId} = useParams()

  const [orderItems, setOrderItems] = useState([])

  const handleRefresh = () => {
    window.location.reload(false)
  }
  useEffect(() => {
    const GetItems = async() => {
      const res = await axios.get(`${BASE_URL}/orders/order_items/id/${customerId}`)
      setOrderItems(res.data.order_items) 
    }
    GetItems()
  }, [customerId])

  const handleDelete = async (e) => {
    let itemId= e
    await axios.delete(`${BASE_URL}/orders/item_id/${itemId}`)
    handleRefresh()
  }

  return (
    <div>Order
      {orderItems.map((item) => (
        <><div className='order-container' key={item.id}>
          <h2>{item.name}</h2>
          <button onClick={() => handleDelete(item.id)} className='delete-item-btn'>Remove From Order</button>
        </div><img className='order-image' src={item.image} alt={item.image} /></>
      ))}
    </div>
  )
}

export default Order