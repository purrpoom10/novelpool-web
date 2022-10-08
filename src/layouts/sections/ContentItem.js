function ContentItem() {
  return (
    <div className='flex flex-wrap w-1/3 '>
      <div className='w-full p-1 md:p-2'>
        <img
          alt='gallery'
          className='block object-cover object-center w-full h-full rounded-lg'
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
        />
      </div>
      <div className='w-full p-1 md:p-2  h-20 rounded-lg'>
        <p>จอมมารสองภพ</p>
        <span>ผู้เขียน : omg</span>
        <span className='pl-2'>หมวด : สยองขวัญ</span>
      </div>
    </div>
  );
}

export default ContentItem;
