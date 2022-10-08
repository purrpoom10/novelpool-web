import { useNavigate } from 'react-router-dom';
import * as novelService from '../../api/novelApi';
import { useNovel } from '../../contexts/NovelContext';

function CreateNovelItem({ novel, fetchNovel }) {
  const { deleteNovel, setEditNovel, editNovel } = useNovel();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteNovel(novel.id);
      fetchNovel();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    setEditNovel(novel);
    navigate(`/updatenovel/${novel.id}`);
  };

  return (
    <>
      <div className=' h-[30vh] flex items-center mt-10 shadow-lg rounded-lg bg-white'>
        <div className='flex ml-20 w-[30vw] h-40 '>
          <div className='w-1/3'>
            <img
              alt='gallery'
              className='block object-cover object-center w-full h-full rounded-lg'
              src={novel.image}
            />
          </div>
          <div className='w-2/3 flex flex-col justify-center pl-5'>
            <div className='font-bold h-10'>
              <p>ชื่อเรื่อง:{novel.novelName}</p>
            </div>
            <div className=''>
              <p>คำโปรย:{novel.title}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            type='button'
            className='w-full px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-blue-900 '
            onClick={handleDelete}
          >
            delete
          </button>

          <button
            type='button'
            className='w-full px-6 py-2 mt-4 text-white bg-gray-600 rounded-lg hover:bg-blue-900 '
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateNovelItem;
