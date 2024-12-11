import axios from "axios";

export const appAxios = (config = {}, baseURL = "/") => {
  let defaultConfig = config;

  const axiosCreate = axios.create({
    baseURL: baseURL,
    responseType: "json",

    headers: {
      ...defaultConfig,
    },
  });

  axiosCreate.interceptors.response.use(
    (res) => res,
    (err) => {
      return Promise.reject(err);
    }
  );

  return axiosCreate;
};
