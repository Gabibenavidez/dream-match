import axios from 'axios';

const BASE_URL = 'https://apiv3.apifootball.com/';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const getByName = (name) => {
  return axiosInstance.get(`?action=get_players&player_name=${name}&APIkey=0d13bb560685c336c122eff811785144ba8537b7c2ae2d934f52da3a2d531b18`);
}
export const getById = (id) => {
  return axiosInstance.get(`?action=get_players&player_id=${id}&APIkey=0d13bb560685c336c122eff811785144ba8537b7c2ae2d934f52da3a2d531b18`);
}
