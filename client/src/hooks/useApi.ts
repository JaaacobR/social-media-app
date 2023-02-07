import Api from "../services/Api";

const useApi = () => {
  const api = new Api();
  return api;
};

export default useApi;
