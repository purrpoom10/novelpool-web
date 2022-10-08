import Router from './route/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose='2000' theme='colored' />
    </>
  );
}

export default App;
