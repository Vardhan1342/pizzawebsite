import React from 'react';
type sectionprops ={
    Heading:string,
    subheading:string
}
const Sectionheading = ({Heading,subheading}:sectionprops) => {
  return (
    <>
      <div className='text-center my-10'>
         <h1 className='uppercase text-xl text-gray-600 font-semibold opacity-60'>{Heading}</h1>
         <h1 className='text-5xl text-red-500 italic font-bold'>{subheading}</h1>
      </div>
    </>
  );
}

export default Sectionheading;
