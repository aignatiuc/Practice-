import { apiClient } from "./api";
import { apiEndpoints } from "@/constants/apiEndpoints";

export const getAnswers = (config) => apiClient.get(apiEndpoints.ANSWERS, config);
