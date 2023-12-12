import Image from 'next/image';
import React from 'react';

const MenuItem = () => {
  return (
    <div>
      
      <div className='flex flex-col justify-center items-center border border-black/0 rounded-md shadow-md text-center space-y-2 py-8 hover:-translate-y-2 transition-all bg-gray-300/30'>
       <div className='bg-orange-300/40 rounded-lg'>
       <Image src="/pizza.png" alt="pizza" width={150} height={100} />
       </div>
       <h1 className='text-xl font-semibold '>Peri Peri Pizza</h1>
       <p className='text-gray-500 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       </p>
       <div>
        <button className='btn tracking-wider text-sm my-5'>
            Add to Cart  ₹120
        </button>
       </div>
       
      </div>
    </div>
  );
}

export default MenuItem;
