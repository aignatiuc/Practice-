import { Axios } from "./api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getUsers = (config) => Axios.get(apiEndpoints.USERS, config);
