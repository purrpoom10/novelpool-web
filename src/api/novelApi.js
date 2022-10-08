import axios from '../config/axios';

export const createNovel = (input) => axios.post('/novel/create', input);
export const getUserNovel = (id) => axios.get(`/novel/getusernovel/${id}`);
export const deleteNovel = (id) => axios.delete(`/novel/deletenovel/${id}`);
export const getAllNovel = () => axios.get('/novel/getallnovel/');
export const updateNovel = (input, id) =>
  axios.patch(`/novel/updatenovel/${id}`, input);
