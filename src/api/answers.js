import { Axios } from "./api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getAnswers = (config) => Axios.get(apiEndpoints.ANSWERS, config);
