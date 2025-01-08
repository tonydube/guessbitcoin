import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";
const LOGIN_URL = `${BASE_URL}token/`;
const LOGOUT_URL = `${BASE_URL}logout/`;
const REGISTER_URL = `${BASE_URL}register/`;
const REFRESH_URL = `${BASE_URL}token/refresh/`;
const AUTH_URL = `${BASE_URL}authenticated/`;
const NOTES_URL = `${BASE_URL}notes/`;

export const login = async (username: string, password: string) => {
  const response = await axios.post(
    LOGIN_URL,
    { username: username, password: password },
    { withCredentials: true }
  );
  return response.data.success;
};

export const logout = async () => {
  try {
    await axios.post(LOGOUT_URL, {}, { withCredentials: true });
    return true;
  } catch (error) {
    return false;
  }
};

export const is_authenticated = async () => {
  try {
    await axios.post(AUTH_URL, {}, { withCredentials: true });
    return true;
  } catch (error) {
    return false;
  }
};

export const refresh_token = async () => {
  const response = await axios.post(REFRESH_URL, {}, { withCredentials: true });
  return response.data.refreshed;
};

export const get_notes = async (): Promise<any> => {
  try {
    const response = await axios.get(NOTES_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return call_refresh(
        error,
        axios.get(NOTES_URL, { withCredentials: true })
      );
    }
    throw error;
  }
};

const call_refresh = async (
  error: AxiosError,
  func: Promise<AxiosResponse>
): Promise<any> => {
  if (error.response && error.response.status === 401) {
    const tokenRefreshed = await refresh_token();
    if (tokenRefreshed) {
      const retryResponse = await func;
      return retryResponse.data;
    }
  }
  return false;
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await axios.post(
    REGISTER_URL,
    {
      username: username,
      email: email,
      password: password,
    },
    { withCredentials: true }
  );
  return response.data;
};
