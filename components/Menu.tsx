import Image from 'next/image';
import React from 'react';
import MenuItem from './MenuItem';
import Sectionheading from './Sectionheading';

const Menu = () => {
  return (
    <section className='mt-[12rem] sm:mt-0'>
      < Sectionheading Heading="Check Out" subheading="Menu" />
      <div className='grid mx-12 sm:mx-0 sm:grid-cols-2  md:grid-cols-3 my-10 gap-y-16 gap-x-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />

      </div>
    </section>
  );
}

export default Menu;
