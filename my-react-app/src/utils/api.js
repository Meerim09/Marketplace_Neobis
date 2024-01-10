const BASE_URL = "https://kunasyl-backender.org.kg/";

export const USER_URL = `${BASE_URL}users/`;

export const USER_ENDPOINTS = {
  LOGIN: "login/",
  SIGNUP: "register/",
};

export const LOGIN_URL = `${USER_URL}${USER_ENDPOINTS.LOGIN}`;
export const SIGNUP_URL = `${USER_URL}${USER_ENDPOINTS.SIGNUP}`;

export const fetchFromAPI = async (url, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
