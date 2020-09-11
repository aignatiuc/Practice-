import API from "./api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getComments = (data) => API.get(apiEndpoints.COMMENTS, { data });
