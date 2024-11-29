export const checkAccessToken = () => {
    const accessToken = localStorage.getItem("token");
    return accessToken ? true : false;
  };
  
  export const getAccessToken = () => {
    const accessToken = localStorage.getItem("token");
    return accessToken;
  };
  
  export const setAccessToken = (token) => {
    localStorage.setItem("token", token);
  };
  