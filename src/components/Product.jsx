import React from 'react'
import Image from 'next/image'
import { useState } from 'react' 
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter'
function Product({ id, title, price,  description, category, image}) {
  const [rating] = useState(
    Math.floor(Math.random()*5 + 1)
  )
  const [hasPrime] = useState(Math.random < 0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 items-center md:-mt-52 '>
      <p className='absolute top-2 right-2 text-xs italic text-gray- 400'>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className='my-3 '>{title}</h4>
      {/* <div className='flex'>
      {Array(rating).fill().map((_, i) => (
        <StarIcon key={i} className="h-5" /> 
      ))}
      </div> */}
      <p className='text-xs my-2 line-clamp-2 '>{description}</p>
      <div>
        <Currency quantity= {price} currency='USD'/> 
      </div>
      {
        hasPrime && (
          <div className='flex items-center space-x-2 -mt-5 mx-auto'>
            <img className='w-12 ' src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-500'> FREE Next-day Delivery</p>
          </div>
        )  
      }
      <button className='mt-auto button'>Add to Basket </button>
    </div>
  )
}

export default Product