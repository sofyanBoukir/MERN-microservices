import React from 'react'
import { SideBar } from '../../components/UI/SideBar'
import { Product } from '../../components/UI/Product'

export const Products = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='mt-7 ml-[18%] w-[80%]'>
        <div>
          <div className='flex justify-between'>
            <div> 
              <h1 className='text-3xl font-semibold'>Products goes here</h1>
            </div>
            <div className='flex gap-2'>
              <button className='text-lg font-semibold bg-blue-500 px-3 py-1 rounded-md cursor-pointer'>Add Product</button>
              <button className='text-lg font-semibold bg-green-700 px-3 py-1 rounded-md cursor-pointer'>Command</button>
            </div>
          </div>
        </div>
        <div className='mt-8 flex gap-5 flex-wrap'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}
