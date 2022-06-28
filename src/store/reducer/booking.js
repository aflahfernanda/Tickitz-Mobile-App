const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEAT_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_SEAT_BOOKING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case 'GET_SEAT_BOOKING_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.data.msg,
      };
    }
    case 'GET_ID_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_ID_BOOKING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case 'GET_ID_BOOKING_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default booking;
