import {addContact, deleteContact, detailContact, editContact, getContact} from '../api';

export const IS_LOADING = 'IS_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING_MENU = 'SET_LOADING_MENU';
export const SET_DATA_CONTACT = 'SET_DATA_CONTACT';
export const SET_DETAIL_CONTACT = 'SET_DETAIL_CONTACT';

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

export const setDataContact = payload => dispatch => {
  dispatch({
    type: SET_DATA_CONTACT,
    payload,
  });
};

export const setDetailContact = payload => dispatch => {
  dispatch({
    type: SET_DETAIL_CONTACT,
    payload,
  });
};

export const handleGetContact = () => dispatch => {
  dispatch(setIsLoading(true));
  getContact()
    .then(response => {
      dispatch(setIsLoading(false));
      dispatch(setDataContact(response.data));
    })
    .catch(({response}) => {
      dispatch(setIsLoading(false));
      console.log('error');
    });
};

export const handleDelete = payload => dispatch => {
  deleteContact(payload)
    .then(response => {
      console.log('delete', response);
      // dispatch(setDataContact(undefined));
    })
    .catch(err => {
      console.log(err);
    });
};

export const handleDetailContact = payload => dispatch => {
  dispatch(setIsLoading(true));
  detailContact(payload)
    .then(response => {
      dispatch(setIsLoading(false));
      dispatch(setDetailContact(response.data));
    })
    .catch(({response}) => {
      dispatch(setIsLoading(false));
      console.log('error');
    });
};

export const handleEditContact = (id, payload) => dispatch => {
  dispatch(setIsLoading(true));
  console.log(id, payload);
  editContact(id, payload)
    .then(response => {
      dispatch(setIsLoading(false));
    })
    .catch(({response}) => {
      dispatch(setIsLoading(false));
      console.log('error');
      console.log(response.data);
    });
};

export const handleAddContact = payload => dispatch => {
  dispatch(setIsLoading(true));
  addContact(payload)
    .then(response => {
      dispatch(setIsLoading(false));
    })
    .catch(({response}) => {
      dispatch(setIsLoading(false));
    });
};
