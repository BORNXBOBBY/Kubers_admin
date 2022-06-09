export const login_credentials = "login_credentials";
export const login_token = "thekuberstoken";

export const loginCheck = () => {
  if (localStorage.getItem(login_token)) {
    return true;
  } else {
    return false;
  }
};

export const is_logged_in = loginCheck();

export const getToken = async () => {
  const token = localStorage.getItem(login_token);
  return token;
};

export const logout = () => {
  localStorage.removeItem(login_token);
  localStorage.removeItem(login_credentials);
};
