import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { validateRegister } from '../../validations/userValidate';

function RegisterForm() {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const [showModal, setShowModal] = useState(false);

  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);
      toast.success('success register');
      setShowModal(false);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <button
        className='bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        สมัครสมาชิก
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>Modal Title</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <form action='' onSubmit={handleSubmitForm}>
                    <div className='mt-4'>
                      <div>
                        <label className='block' htmlFor='Name'>
                          Username
                          <label>
                            <input
                              type='text'
                              placeholder='Username'
                              name='userName'
                              value={input.userName}
                              onChange={handleChangeInput}
                              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                            />
                          </label>
                        </label>
                      </div>
                      <div>
                        <label className='block' htmlFor='Name'>
                          Email
                          <label>
                            <input
                              type='text'
                              placeholder='Email'
                              name='email'
                              value={input.email}
                              onChange={handleChangeInput}
                              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                            />
                          </label>
                        </label>
                      </div>
                      <div className='mt-4'>
                        <label className='block' htmlFor='email'>
                          Password
                          <label>
                            <input
                              type='password'
                              placeholder='Password'
                              name='password'
                              value={input.password}
                              onChange={handleChangeInput}
                              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                            />
                          </label>
                        </label>
                      </div>
                      <div className='mt-4'>
                        <label className='block'>
                          Confirm Password
                          <label>
                            <input
                              type='password'
                              placeholder='Confirm Password'
                              name='confirmPassword'
                              value={input.confirmPassword}
                              onChange={handleChangeInput}
                              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                            />
                          </label>
                        </label>
                      </div>

                      <div className='flex'>
                        <button
                          type='submit'
                          className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => startLoading()}
                  >
                    test spinner
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

export default RegisterForm;
