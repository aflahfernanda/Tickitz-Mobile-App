import axios from '../../utils/axios';

export const getSeatBooking = (scheduleId, timeBooking) => {
  return {
    type: 'GET_SEAT_BOOKING',
    payload: axios.get(
      `booking?scheduleId=${scheduleId}&dateBooking=&timeBooking=${timeBooking}`,
    ),
  };
};
export const getIdBooking = id => {
  return {
    type: 'GET_ID_BOOKING',
    payload: axios.get(`booking/bookingId/${id}`),
  };
};
