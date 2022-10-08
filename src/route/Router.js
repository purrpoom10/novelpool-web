import HomePage from '../pages/HomePage';
import InsertNovelPage from '../pages/InsertNovelPage';
import MynovelPage from '../pages/MynovelPage';
import UpdateNovelPage from '../pages/UpdateNovelPage';

const { Routes, Route } = require('react-router-dom');

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/insertnovel' element={<InsertNovelPage />} />
      <Route path='/updatenovel/:id' element={<UpdateNovelPage />} />
      <Route path='/mynovel' element={<MynovelPage />} />
    </Routes>
  );
}

export default Router;
