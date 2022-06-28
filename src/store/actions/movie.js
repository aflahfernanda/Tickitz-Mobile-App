import {type} from '@testing-library/user-event/dist/type';
import axios from '../../utils/axios';

export const getDataMovie = (page, limit, search, sort, searchRelease) => {
  return {
    type: 'GET_DATA_MOVIE',
    payload: axios.get(
      `movie?page=1&limit=100&sort=&searchRelease=${searchRelease}&searchName=`,
    ),
  };
};

export const postMovie = form => {
  return {
    type: 'POST_MOVIE',
    payload: axios.post('movie', form),
  };
};
export const updateMovie = (id, form) => {
  return {
    type: 'UPDATE_MOVIE',
    payload: axios.patch(`movie/${id}`, form),
  };
};
export const deleteMovie = id => {
  return {
    type: 'DELETE_MOVIE',
    payload: axios.delete(`movie/${id}`),
  };
};
