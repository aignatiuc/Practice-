import { apiClient } from "./api";
import { apiEndpoints } from "@/constants/apiEndpoints";

export const getQuestions = (config) => apiClient.get(apiEndpoints.QUESTIONS, config);
