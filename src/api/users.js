import { apiClient } from "./api";
import { apiEndpoints } from "@/constants/apiEndpoints";

export const getUsers = (config) => apiClient.get(apiEndpoints.USERS, config);
