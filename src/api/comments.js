import { apiClient } from "./api";
import { apiEndpoints } from "@/constants/apiEndpoints";

export const getComments = (config) => apiClient.get(apiEndpoints.COMMENTS, config);
