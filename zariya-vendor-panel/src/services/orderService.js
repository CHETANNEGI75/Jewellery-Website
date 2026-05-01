import axios from "axios";

const API = "http://localhost:5000/api/orders";

const getToken = () => localStorage.getItem("token");

export const getOrders = async () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};