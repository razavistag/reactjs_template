import axios from "axios";

axios.interceptors.request.use(
  async function (config) {
    let AuthToken = "AUTH TOKEN FROM LOCALHOST";

    if (AuthToken) {
      config.headers = Object.assign(
        {
          Authorization: `Bearer ${AuthToken}`,
        },
        config.headers
      );
    }
    config.baseURL = `http://127.0.0.1:8000`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
