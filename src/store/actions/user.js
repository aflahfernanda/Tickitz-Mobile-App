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
    payload: axios.patch(`user/profile/${id}`, form),
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
    payload: axios.patch(`user/image/${id}`, form),
  };
};
export const deleteImage = id => {
  return {
    type: 'DELETE_IMAGE',
    payload: axios.delete(`user/delete/${id}`),
  };
};
export const getBookingByUserById = id => {
  return {
    type: 'GET_BOOKING',
    payload: axios.get(`booking/${id}`),
  };
};
