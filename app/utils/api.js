import { appAxios } from "@@axios/AppAxios";

/* POST REQUEST */
const makePostRequest = async (endpoint, body, config = {}) => {
  const { data } = await appAxios(config).post(endpoint, body);

  return data;
};

const makeShiprocketPostRequest = async (endpoint, body, config = {}) => {
  const { data } = await shiprocketAxios().post(endpoint, body);
  return data;
};

/* GET REQUEST */
const makeGetRequest = async (endpoint, config = {}, params = {}) => {
  const { data } = await appAxios(config).get(endpoint, {
    params: params,
    paramsSerializer: {
      indexes: null,
    },
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
    },
  });
  return data;
};

const makeShiprocketGetRequest = async (endpoint, config = {}, params = {}) => {
  const { data } = await shiprocketAxios(config).get(endpoint, {
    params: params,
  });
  return data;
};

/* DELETE REQUEST */
const makeDeleteRequest = async (endpoint, config = {}) => {
  const { data } = await appAxios(config).delete(endpoint);
  return data;
};

export {
  makePostRequest,
  makeGetRequest,
  makeDeleteRequest,
  makeShiprocketPostRequest,
  makeShiprocketGetRequest,
};
