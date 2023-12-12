import React from 'react';
import Sectionheading from './Sectionheading';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const Contactus = () => {
  return (
    <div>
      <Sectionheading Heading="Don\'t hesitate" subheading='Contact us' />
      <div className='text-2xl text-gray-600 text-center mx-auto mb-5 underline flex justify-center items-center gap-x-1'>
      <IoPhonePortraitOutline size={22} />  <a href="tel:+919493103566">+91 9494567320</a>
      </div>
      
    </div>
  );
}

export default Contactus;
