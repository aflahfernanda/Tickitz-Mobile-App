const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: '',
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_TRANSACTION_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'POST_TRANSACTION_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case 'POST_TRANSACTION_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default transaction;
