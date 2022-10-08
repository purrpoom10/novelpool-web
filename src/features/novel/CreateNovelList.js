import CreateNovelItem from './CreateNovelItem';
import { useEffect, useState } from 'react';
import * as novelService from '../../api/novelApi';
import { useAuth } from '../../contexts/AuthContext';
import { useNovel } from '../../contexts/NovelContext';

function CreateNovelList() {
  const {
    user: { id },
  } = useAuth();

  const { getUserNovel, novels } = useNovel();

  const fetchNovel = async () => {
    try {
      await getUserNovel(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNovel();
  }, []);

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center bg-gray-100'>
        <div className='w-[70vw]'>
          {novels.Novels?.map((item) => (
            <CreateNovelItem
              key={item.id}
              novel={item}
              fetchNovel={fetchNovel}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CreateNovelList;
