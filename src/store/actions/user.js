import axios from '../../utils/axios';

export const getUserById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};
export const updateProfile = (id, form) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axios.patch(`user/account/user/${id}`, form),
  };
};
export const updatePassword = (id, form) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch(`user/password/${id}`, form),
  };
};
export const updateImage = (id, form) => {
  return {
    type: 'UPDATE_IMAGE',
    payload: axios.patch(`user/image/user/${id}`, form),
  };
};
