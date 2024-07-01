import {
  IS_LOADING,
  SET_ERROR,
  SET_LOADING_MENU,
  SET_DATA_MOVIE,
  SET_DETAIL_MOVIE,
  SET_DATA_LIKED,
  SET_LOAD_LIKED,
  SET_DATA_FAV,
} from '../action/movie-action';

const initialState = {
  dataMovie: undefined,
  isLoading: false,
  isLoadingMenu: false,
  errorMessage: undefined,
  detailMovie: undefined,
  isLiked: false,
  loadLike: false,
  dataFavorite: undefined,
};

const movieReducer = (state = initialState, {payload, type}) => {
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
    case SET_DATA_MOVIE:
      return {
        ...state,
        dataMovie: payload,
      };
    case SET_DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: payload,
      };
    case SET_DATA_LIKED:
      return {
        ...state,
        isLiked: payload,
      };
    case SET_LOAD_LIKED:
      return {
        ...state,
        loadLike: payload,
      };
    case SET_DATA_FAV:
      return {
        ...state,
        dataFavorite: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
