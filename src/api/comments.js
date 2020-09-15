import { Axios } from "./api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getComments = (config) => Axios.get(apiEndpoints.COMMENTS, config);
