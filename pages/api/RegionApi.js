import config from '../config/config';
import axios from 'axios';

//fungi list untuk get data
const List = async () => {
  try {
    // const result = await axios.get(`${config.domain}/api/region/`)
    const result = await axios.get(`${config.domain}/users/userall`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

//fungsi delete untuk menghapus data
const Delete = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/users/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

//fungsi create untuk membuat data
const Create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/users/`, payload);
    console.log(payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

//fungsi update untuk memperbarui data
const Update = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/users/${data.id}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

//fungsi update file untuk memperbarui file regions
const UpdateFile = async (data) => {
  const id = parseInt(data.get('regionId'));
  try {
    const result = await axios.put(`${config.domain}/api/region/${id}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

//fungsi findone untuk mencari data by id
const FindOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/api/region/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { List, Delete, Create, Update, FindOne, UpdateFile };
