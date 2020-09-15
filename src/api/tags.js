import { apiClient } from "./api";
import { apiEndpoints } from "@/constants/apiEndpoints";

export const getTags = (config) => apiClient.get(apiEndpoints.TAGS, config);
