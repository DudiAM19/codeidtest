import axios from 'axios';

const uri = 'https://contact.herokuapp.com';

export const getContact = () => {
  return axios.get(`${uri}/contact`);
};

export const deleteContact = payload => {
  return axios.delete(`${uri}/contact/${payload}`);
};

export const detailContact = payload => {
  return axios.get(`${uri}/contact/${payload}`);
};

export const editContact = (id, payload) => {
  return axios.put(`${uri}/contact/${id}`, payload);
};

export const addContact = payload => {
  return axios.post(`${uri}/contact`, payload);
};
