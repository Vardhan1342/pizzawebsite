import React from 'react';
import Sectionheading from './Sectionheading';

const Aboutus = () => {
  return (
    <div>
      <Sectionheading Heading="Our Story" subheading="About us" />
      <div className='text-center text-gray-500 text-sm flex flex-col gap-y-3 max-w-2xl mx-auto leading-6'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita numquam aliquam voluptas maxime deserunt, quod esse corrupti vel enim unde molestiae inventore in odio tempore aut a? Deleniti, exercitationem esse?</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo facere aspernatur nihil esse itaque vel commodi accusamus corporis amet dolor odit debitis cum impedit in sequi unde, necessitatibus nam minus. Aut cumque suscipit eaque.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
