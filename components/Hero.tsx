import Image from 'next/image';
import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className='sm:grid grid-cols-2 mt-20 relative '>
      <div className='py-4 mt-10 translate-y-4'>
            <h1 className='font-bold text-4xl'>
                We are the best {' '} <br />
                <span className='text-5xl text-red-600'>
                    Pizza Makers
                </span>
            </h1>
            <p className='text-gray-500 text-sm font font-semibold my-4'>
                Pizza is the missing place that makes every day complete, a simple yet delicious joy in life
            </p>
            <div className='flex items-center gap-4 my-4'>
                <button className='btn'>
                Order Now {' '}
                <IoArrowForwardCircleOutline size="20" />
                </button>
                <button className='btn'> 
                    Learn More {' '}
                    <IoArrowForwardCircleOutline size="20" />

                </button>
            </div>
            
      </div>

      <div className='sm:relative absolute -top-10 -right-28 sm:right-0 -z-10 opacity-20 sm:opacity-100 overflow-hidden'>
        <Image src="/pizza.png" width="500" height="100"  alt="pixxa" className='object-contain' />
      </div>
    </section>
  );
}

export default Hero;
