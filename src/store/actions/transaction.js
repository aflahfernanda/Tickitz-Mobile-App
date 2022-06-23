import {type} from '@testing-library/user-event/dist/type';
import axios from '../../utils/axios';

export const postTransaction = form => {
  return {
    type: 'POST_TRANSACTION',
    payload: axios.post('booking', form),
  };
};
