import { createContext, useContext, useEffect, useState } from 'react';
import * as novelService from '../api/novelApi';

const NovelContext = createContext();

function NovelContextProvider({ children }) {
  const [novels, setNovels] = useState([]);
  const [allNovel, setAllNovel] = useState([]);
  const [editNovel, setEditNovel] = useState([]);

  const createNovel = async (input) => {
    await novelService.createNovel(input);
  };

  const deleteNovel = async (id) => {
    await novelService.deleteNovel(id);
  };

  const getUserNovel = async (id) => {
    const res = await novelService.getUserNovel(id);
    setNovels(res.data.userNovel);
  };

  const getAllNovel = async () => {
    const res = await novelService.getAllNovel();
    setAllNovel(res.data.allNovel);
  };

  const updateNovel = async (input, id) => {
    await novelService.updateNovel(input, id);
  };

  return (
    <NovelContext.Provider
      value={{
        createNovel,
        deleteNovel,
        getUserNovel,
        novels,
        getAllNovel,
        allNovel,
        updateNovel,
        editNovel,
        setEditNovel,
      }}
    >
      {children}
    </NovelContext.Provider>
  );
}

export const useNovel = () => {
  return useContext(NovelContext);
};

export default NovelContextProvider;
