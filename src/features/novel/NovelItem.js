import React from 'react';

function NovelItem({ novel }) {
  return (
    <div className='flex flex-wrap w-1/5  '>
      <div className='w-full h-4/5 p-1 md:p-2'>
        <div className='h-full'>
          <img
            alt='gallery'
            className='block object-cover object-center w-full h-full rounded-lg'
            src={novel.image}
          />
        </div>
      </div>
      <div className='w-full h-1/5 p-1 md:p-2 rounded-lg'>
        <p className='font-bold'>{novel.novelName}</p>
        <span>ผู้เขียน : {novel.User.userName}</span>
        {/* <span className='pl-2'>หมวด : สยองขวัญ</span> */}
      </div>
    </div>
  );
}

export default NovelItem;
