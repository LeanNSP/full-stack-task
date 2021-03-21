import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3300';

export const tokenToHeader = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const post = async (url, item = null) => {
  try {
    const { data } = await axios.post(url, item);

    return data;
  } catch (error) {
    throw error;
  }
};

export const get = async url => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    throw error;
  }
};
