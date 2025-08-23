import dbConnect from '@/lib/dbConnect'
import React from 'react'

export default async function products() {
  
const collection = await dbConnect('ShopData')
  const data = await collection.find({}).toArray()
console.log(JSON.stringify(data))
  return (
    <div>

      
    </div>
  )
}
