import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as novelService from '../api/novelApi';
import Spinner from '../components/ui/Spinner';
import { useLoading } from '../contexts/LoadingContext';
import { useNovel } from '../contexts/NovelContext';
import Header from '../layouts/headers/Header';

function InsertNovelPage() {
  const { createNovel } = useNovel();

  const [novelName, setNovelName] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const { startLoading, stopLoading, loading } = useLoading();

  const navigate = useNavigate();
  const inputEl = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (!novelName && !title && !image) {
        return toast.error('novelName title image is required');
      }
      if (novelName) {
        formData.append('novelName', novelName);
      }
      if (title) {
        formData.append('title', title);
      }
      if (image) {
        formData.append('image', image);
      }
      startLoading();
      // await novelService.createNovel(formData);
      await createNovel(formData);

      toast.success('create success');
      setNovelName('');
      setTitle('');
      setImage(null);
      navigate('/mynovel');
    } catch (err) {
      toast.error(err.response?.data.message);
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <Header />
      <div className='justify-center flex h-[100vh] bg-gray-100'>
        <form
          className='flex justify-center h-[50vh] w-[50vw] rounded-lg mt-20 shadow-lg'
          onSubmit={handleSubmit}
        >
          <div
            className='w-1/3 flex justify-center items-center border-r bg-indigo-100 rounded-l-lg cursor-pointer'
            onClick={() => inputEl.current.click()}
          >
            <input
              type='file'
              className='hidden'
              ref={inputEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            {image ? (
              <img
                className='w-full h-full'
                src={URL.createObjectURL(image)}
                alt='novelprofile'
              />
            ) : (
              <img
                src='https://static.vecteezy.com/system/resources/previews/004/511/733/original/camera-icon-on-white-background-vector.jpg'
                className='rounded-full shadow-sm w-12 h-12'
                alt='camera'
              />
            )}
          </div>
          <div className='w-2/3 bg-white rounded-r-lg p-6'>
            <div>
              <label className='block' htmlFor='Name'>
                ชื่อเรื่อง
                <label>
                  <input
                    type='text'
                    name='userName'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                    value={novelName}
                    onChange={(e) => setNovelName(e.target.value)}
                  />
                </label>
              </label>
            </div>
            <div>
              <label className='block' htmlFor='Name'>
                คำโปรย
                <label>
                  <textarea
                    type='text'
                    placeholder='คำโปรยไม่น้อยกว่า 50 ตัวอักษร'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 resize-none'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              </label>
            </div>
            <div className='mt-3 '>
              <label htmlFor='category'>หมวดหมู่</label>
              <select className='ml-5 rounded-md' name='category' id='category'>
                <option value='กำลังภายใน'>กำลังภายใน</option>
                <option value='แฟนตาซี'>แฟนตาซี</option>
                <option value='สืบสวน'>สืบสวน</option>
                <option value='สยองขวัญ'>สยองขวัญ</option>
              </select>
            </div>
            <div className='flex'>
              {loading ? (
                <Spinner />
              ) : (
                <button
                  type='submit'
                  className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 '
                >
                  submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default InsertNovelPage;
