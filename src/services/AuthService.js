import axios from 'axios'

const url = 'http://localhost:4000/api/'

export default {
  login(credentials) {
    return axios
      .post(url + 'users/sign_in', credentials)
      .then(response => response.data.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'users', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};