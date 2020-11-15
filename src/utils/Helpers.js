export const clearToken = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
};

export const storeToken = (token) => {
  localStorage.setItem("token", token);
};

export const decodeToken = (token) => {
  let data = token.split(".")[1];
  let decoded = window.atob(data);
  let userClaims = JSON.parse(decoded).user_claims;

  return userClaims;
};