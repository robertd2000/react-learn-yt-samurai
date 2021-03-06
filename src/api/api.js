import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '2bbaa87f-971d-4450-8950-56c009301e52',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  follow(id) {
    return instance
      .post(`follow/${id}`, null)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status,
    });
  },
};

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },

  login(email, password, rememberMe = false) {
    return instance
      .post('/auth/login', {
        email,
        password,
        rememberMe,
        // captcha: true,
      })
      .then((response) => response.data);
  },

  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
