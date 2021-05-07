import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCING = 'TOGGLE_IS_FETCING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [
    // {id: 1, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: true, fullName: 'Dima', status: 'I am boss', location: {city: "Moscow", country: 'Russia'}},
    // {id: 2, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: false, fullName: 'Ivan', status: 'I am boss too', location: {city: "Kiev", country: 'Ukraine'}},
    // {id: 3, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: false, fullName: 'Alex', status: 'I am boss 3', location: {city: "London", country: 'UK'}},
    // {id: 4, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: true, fullName: 'Vasya', status: 'I am boss', location: {city: "SPB", country: 'Russia'}},
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingIsProgreess: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }

    case TOGGLE_IS_FETCING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingIsProgreess: action.isFetching
          ? [...state.followingIsProgreess, action.userId]
          : state.followingIsProgreess.filter((i) => i !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unFollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCING,
  isFetching,
});

export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const unFollow = (id) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, id));
  usersAPI.unfollow(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unFollowSuccess(id));
    }
    dispatch(toggleIsFollowingProgress(false, id));
  });
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, id));
  usersAPI.follow(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(id));
    }
    dispatch(toggleIsFollowingProgress(false, id));
  });
};
