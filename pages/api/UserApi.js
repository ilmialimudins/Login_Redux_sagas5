import axios from 'axios';
import config from '../config/config';

//function untuk mendaftarkan akun baru dengan mempost data yang diberikan pada endpoint /users
const signup = async (data) => {
  try {
    // const result = await axios.post(`${config.domain}/auth/signup`,data);
    const result = await axios.post(`${config.domain}/users/new`, data);
    return result;
  } catch (error) {
    return error;
  }
};

// function untuk melakukan login dengan mempost data yang diberikan pada endpoint /auth/login
const signin = async (data) => {
  try {
    // const result = await axios.post(`${config.domain}/auth/login`,data);
    const result = await axios.post(`${config.domain}/auth/login`, data);
    return result;
  } catch (error) {
    return error;
  }
};

/* function untuk melihat profil user dengan memanggil endpoint /users. 
    Fungsi ini juga menambahkan header dengan token yang ada pada sessionStorage
*/
const profile = async () => {
  // axios.defaults.headers.common = {'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`}
  axios.defaults.headers.common = {
    Authorization: `${sessionStorage.getItem('token')}`,
  };
  try {
    const result = await axios.get(`${config.domain}/users/userall`);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  signin,
  signup,
  profile,
};
