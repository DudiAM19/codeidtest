import {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
  handleGetDataFav,
  handleGetDetailMovie,
  handleGetMovie,
  handlePostFav,
  setDataMovie,
} from '../../redux/action/movie-action';

const useDashboard = navigation => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [uniqId, setUniqId] = useState(0);
  const {dataMovie, isLoadingMenu, loadLike, isLiked, dataFavorite} =
    useSelector(
      ({movieReducer}) => ({
        dataMovie: movieReducer.dataMovie,
        isLoadingMenu: movieReducer.isLoadingMenu,
        loadLike: movieReducer.loadLike,
        isLiked: movieReducer.isLiked,
        dataFavorite: movieReducer.dataFavorite,
      }),
      shallowEqual,
    );

  const [data, setData] = useState(dataMovie);
  const arrTab = [
    {
      text: 'Home',
      label: 'back',
    },
    {
      text: 'Favorite',
      label: 'next',
    },
  ];
  useEffect(() => {
    if (data === undefined) {
      dispatch(handleGetMovie(page.toString()));
      dispatch(handleGetDataFav(page.toString()));
    }
  }, [data]);

  useEffect(() => {
    uniqId === 0 ? setData(dataMovie) : setData(dataFavorite);
  }, [uniqId, dataMovie, dataFavorite]);

  const handleDetail = val => {
    navigation.navigate('Detail', {
      data: val.original_title,
    });

    dispatch(handleGetDetailMovie(val.id));
  };

  const handlePagenation = val => {
    if (page === 1 && val === 'back') {
      return null;
    } else {
      const num = val === 'back' ? page - 1 : page + 1;
      setPage(num);
      dispatch(setDataMovie(undefined));
    }
  };

  const handlePressLike = val => {
    const payload = {
      media_type: 'movie',
      media_id: val.id,
      favorite: true,
    };
    dispatch(handlePostFav(payload));
  };

  const filtered = !search
    ? data?.results
    : data?.results?.filter(l =>
        l.original_title.toLowerCase().includes(search.toLowerCase()),
      );

  const handleTab = index => {
    setUniqId(index);
    setData(undefined)
    if (index === 0) {
      dispatch(handleGetMovie(page.toString()));
    } else {
      dispatch(handleGetDataFav(page.toString()));
    }
  };
  return {
    filtered,
    setSearch,
    arrTab,
    uniqId,
    setUniqId,
    handleDetail,
    isLoadingMenu,
    handlePagenation,
    page,
    handlePressLike,
    loadLike,
    isLiked,
    dispatch,
    handleTab,
  };
};
export default useDashboard;
