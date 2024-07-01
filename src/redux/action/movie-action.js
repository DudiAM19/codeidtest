import createApiInstance from '../../service';

export const IS_LOADING = 'IS_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING_MENU = 'SET_LOADING_MENU';
export const SET_DATA_MOVIE = 'SET_DATA_MOVIE';
export const SET_DETAIL_MOVIE = 'SET_DETAIL_MOVIE';
export const SET_DATA_LIKED = 'SET_DATA_LIKED';
export const SET_LOAD_LIKED = 'SET_LOAD_LIKED';
export const SET_DATA_FAV = 'SET_DATA_FAV';

export const setIsLoading = payload => dispath => {
  dispath({
    type: IS_LOADING,
    payload,
  });
};

export const setIsError = payload => dispath => {
  dispath({
    type: SET_ERROR,
    payload,
  });
};

export const setLoadingMenu = payload => dispatch => {
  dispatch({
    type: SET_LOADING_MENU,
    payload,
  });
};

export const setDataMovie = payload => dispatch => {
  dispatch({
    type: SET_DATA_MOVIE,
    payload,
  });
};

export const setDetailMovie = payload => dispatch => {
  dispatch({
    type: SET_DETAIL_MOVIE,
    payload,
  });
};

export const setDataLike = payload => dispatch => {
  dispatch({
    type: SET_DATA_LIKED,
    payload,
  });
};

export const setLoadLike = payload => dispatch => {
  dispatch({
    type: SET_LOAD_LIKED,
    payload,
  });
};

export const setDataFavorit = payload => dispatch => {
  dispatch({
    type: SET_DATA_FAV,
    payload,
  });
};

export const handleGetMovie = payload => async dispatch => {
  const api = await createApiInstance();
  const uri = `/movie/popular?language=en-US&page=${payload}`;
  dispatch(setLoadingMenu(true));
  try {
    const response = await api.get(uri);
    if (response.data.results) {
      dispatch(setDataMovie(response.data));
      dispatch(setLoadingMenu(false));
    } else {
      dispatch(setLoadingMenu(false));
      dispatch(setIsError(response?.data?.message));
    }
  } catch ({response}) {
    dispatch(setLoadingMenu(false));
    dispatch(setIsError('api failed'));
  }
};

export const handleGetDetailMovie = (payload, navigation) => async dispatch => {
  const api = await createApiInstance();
  const uri = `/movie/${payload}?language=en-US`;
  dispatch(setLoadingMenu(true));
  try {
    const response = await api.get(uri);
    if (response.data) {
      dispatch(setDetailMovie(response.data));
      dispatch(setLoadingMenu(false));
    } else {
      dispatch(setLoadingMenu(false));
      dispatch(setIsError(response?.data?.message));
    }
  } catch ({response}) {
    dispatch(setLoadingMenu(false));
    dispatch(setIsError('api failed'));
  }
};

export const handlePostFav = payload => async dispatch => {
  const api = await createApiInstance();
  const uri = '/account/11592447/favorite';
  dispatch(setLoadLike(true));
  try {
    const response = await api.post(uri, payload);
    if (response.data) {
      dispatch(setDataLike(true));
      dispatch(setLoadLike(false));
    } else {
      dispatch(setLoadLike(false));
      dispatch(setIsError(response?.data?.message));
    }
  } catch ({response}) {
    dispatch(setLoadLike(false));
    dispatch(setIsError('api failed'));
  }
};

export const handleGetDataFav = payload => async dispatch => {
  const api = await createApiInstance();
  const uri = `/account/11592447/favorite/movies?language=en-US&page=${payload}&sort_by=created_at.asc`;
  dispatch(setIsLoading(true));
  try {
    const response = await api.get(uri, payload);
    if (response.data) {
      dispatch(setDataFavorit(response.data));
      dispatch(setIsLoading(false));
    } else {
      dispatch(setIsLoading(false));
      dispatch(setIsError(response?.data?.message));
    }
  } catch ({response}) {
    dispatch(setIsLoading(false));
    dispatch(setIsError('api failed'));
  }
};
