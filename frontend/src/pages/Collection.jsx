import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([])


  useEffect(()=>{
    setFilterProducts(products)
  } ,[products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-400'>
      
    {/* Filter options */}
    <div className='min-w-60'>
      <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
      <img  className={`h-3 sm:hidden ${showFilter? `rotate-90`: ""}`} src={assets.dropdown_icon} alt="" />
      </p>


      {/* Category Filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? ``:"hidden"} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'men'}/> Men
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'woman'}/> Woman
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'kids'}/> Kids
          </p>
        </div>
      </div>
      {/* subcategory filter  */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? ``:"hidden"} sm:block`}>
        <p className='mb-3 text-sm font-medium'>Type</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Topwear'}/> Topwear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'botomwear'}/> botomwear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Winterwear'}/> Winterwear
          </p>
        </div>
      </div>


    </div>

    {/* right side  */}
    <div className='flex-1 '>
      <div className= 'flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        {/* product sort  */}
        <select className='border-2 border-gray-300 text-sm px-2'>
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>
      {/* map products  */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=> (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}></ProductItem>

            ))
          }
      </div>
    </div>
    
    </div>
  )
}

export default Collection