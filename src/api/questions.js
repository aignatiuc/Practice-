import { Axios } from "./api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getQuestions = (config) =>
  Axios.get(apiEndpoints.QUESTIONS, config);
