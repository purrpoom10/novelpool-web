import { useAuth } from '../contexts/AuthContext';
import HomePage from '../pages/HomePage';
import LoginSuccess from '../pages/LoginSuccess';

const { Routes, Route } = require('react-router-dom');

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default Router;
