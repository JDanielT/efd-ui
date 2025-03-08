import axios from "axios";

const USER_API = "/v1/users";

export const getPaginatedUsers = (pageNumber, pageSize) => async () => {
  const config = {
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return await axios.get(USER_API, config).content;
};