import React from 'react';
import ContentItem from './ContentItem';

function Content() {
  return (
    <>
      <div className='overflow-hidden text-gray-700 '>
        <div className='container px-5 py-2 mx-auto lg:pt-6 lg:px-32'>
          <div className=''>
            <p className='text-xl font-semibold whitespace-nowrap dark:text-white h-10'>
              นิยายน่าอ่าน
            </p>
          </div>
          <div className='flex flex-wrap -m-1 md:-m-2 '>
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
