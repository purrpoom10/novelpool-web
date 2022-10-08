import { useEffect, useState } from 'react';
import { useNovel } from '../../contexts/NovelContext';
import NovelItem from './NovelItem';

function NovelList() {
  const { getAllNovel, allNovel } = useNovel();

  useEffect(() => {
    const fetchNovel = async () => {
      try {
        await getAllNovel();
      } catch (err) {
        console.log(err);
      }
    };
    fetchNovel();
  }, []);

  return (
    <>
      <div className='overflow-hidden text-gray-700 '>
        <div className='container px-5 py-2 mx-auto lg:pt-6 lg:px-48'>
          <div className=''>
            <p className='text-xl font-semibold whitespace-nowrap dark:text-white h-10'>
              นิยายน่าอ่าน
            </p>
          </div>
          <div className='flex flex-wrap -m-1 md:-m-2 '>
            {allNovel?.map((item) => (
              <NovelItem key={item.id} novel={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NovelList;
