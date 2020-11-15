import axios from "axios";

function get(suffix, token) {
  return axios.get(suffix, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function post(suffix, data, token) {
  return axios.post(suffix, data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function put(suffix, data, token) {
  return axios.put(suffix, data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function remove(suffix, token) {
  return axios.delete(suffix, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export default {
  login: function (user) {
    return post("/login", user);
  },
  register: function (user) {
    return axios.post("/register", user);
  },
  getUser: function (id, token) {
    return get("/users/get-user/" + id, token);
  },
  deleteUser: function (id, token) {
    return remove("/users/remove/" + id, token);
  },
  updateUser: function (user, token) {
    return put("/users/update", user, token);
  },
  getUsers: function (token) {
    return get("/users/all", token);
  },
  loadHome: function (token) {
    return get("/home", token);
  },
};
