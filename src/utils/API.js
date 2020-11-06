import axios from "axios";

// function postWithToken(suffix, data, token) {
//   return axios.post(suffix, data, {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

function postWithoutToken(suffix, data) {
  return axios.post(suffix, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
}

export default {
  login: function (user) {
    return postWithoutToken("/login", user);
  },
  register: function (user) {
    return postWithoutToken("/register", user);
  },
};
