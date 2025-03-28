
import React from 'react'
import Counter from '@/app/components/Counter'
const ProductDetail = async ({params}) => {
   
    const {id} = await params
    if (id > 100) throw new Error("Product error")
  return (
    <div>
        <h2>THis is the Product Detail Page for id {id}</h2>
        <Counter/>
    </div>
  )
}

export default ProductDetail