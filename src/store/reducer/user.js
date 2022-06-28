const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BY_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_USER_BY_ID_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data[0], role: 'admin'},
        msg: action.payload.data.msg,
      };
    }
    case 'GET_USER_BY_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.data.msg,
      };
    }
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data,
      };
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data,
      };
    }
    case 'UPDATE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data,
      };
    }
    case 'UPDATE_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data,
      };
    }
    case 'UPDATE_IMAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_IMAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data,
      };
    }
    case 'UPDATE_IMAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data,
      };
    }
    case 'DELETE_IMAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'DELETE_IMAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data,
      };
    }
    case 'DELETE_IMAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data,
      };
    }
    case 'GET_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_BOOKING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data[0], role: 'admin'},
        msg: action.payload.data.msg,
      };
    }
    case 'GET_BOOKING_REJECTED': {
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

export default user;
