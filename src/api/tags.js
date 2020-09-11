import { Axios } from "./api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getTags = (config) => Axios.get(apiEndpoints.TAGS, config);
