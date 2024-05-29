import {
  IS_LOADING,
  SET_ERROR,
  SET_LOADING_MENU,
  SET_DATA_CONTACT,
  SET_DETAIL_CONTACT,
} from '../action/contact-action';

const initialState = {
  dataContact: undefined,
  isLoading: false,
  isLoadingMenu: false,
  errorMessage: undefined,
  detailContact: undefined,
};

const contactReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    case SET_LOADING_MENU:
      return {
        ...state,
        isLoadingMenu: payload,
      };
    case SET_DATA_CONTACT:
      return {
        ...state,
        dataContact: payload,
      };
    case SET_DETAIL_CONTACT:
      return {
        ...state,
        detailContact: payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
