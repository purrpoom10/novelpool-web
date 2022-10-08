import { useAuth } from '../../contexts/AuthContext';

function UserTag({ onClick }) {
  const { user } = useAuth();
  return (
    <>
      <div
        className=' active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={onClick}
      >
        User : {user.userName}
      </div>
    </>
  );
}

export default UserTag;
