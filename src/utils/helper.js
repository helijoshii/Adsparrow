// import { toast } from "react-toastify";

// export const checkAccessToken = () => {
//     const accessToken = localStorage.getItem("token");
//     return accessToken ? true : false;
//   };
  
//   export const getAccessToken = () => {
//     const accessToken = localStorage.getItem("token");
//     return accessToken;
//   };
  
//   export const setAccessToken = (token) => {
//     localStorage.setItem("token", token);
//   };
  
//   export const errorToast = (message) => {
//     return toast.error(message, {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };


import { toast } from "react-toastify";

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

export const  getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};


export const errorToast = (message) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
