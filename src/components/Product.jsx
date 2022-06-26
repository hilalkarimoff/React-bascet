import React from 'react'

const Product = (total,money,bascet,setBascet,product) => {
  const bascetItem = bascet.find(item=> item.id === product.id) 

  const addBascet = () =>{
    const checkBascet = bascet.find(item=>item.id ===product.id)
    if(checkBascet){
      // prototype based
      checkBascet.amount +=1
      // SPREAD OPERATOR
      setBascet([...bascet.filter(item=>item.id !== product.id), checkBascet])
    }
    else {
      setBascet([...bascet,{
        id:product.id,
        amount:1
      }])
    }
  }
  return (
    <div>Product</div>
  )
}

export default Product