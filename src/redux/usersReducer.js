const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: true, fullName: 'Dima', status: 'I am boss', location: {city: "Moscow", country: 'Russia'}},
        // {id: 2, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: false, fullName: 'Ivan', status: 'I am boss too', location: {city: "Kiev", country: 'Ukraine'}},
        // {id: 3, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: false, fullName: 'Alex', status: 'I am boss 3', location: {city: "London", country: 'UK'}},
        // {id: 4, photoUrl: 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', followed: true, fullName: 'Vasya', status: 'I am boss', location: {city: "SPB", country: 'Russia'}},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [
                    ...action.users
                ]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
            
        default:
            return state
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})

export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = users => ({
    type: SET_USERS, 
    users
})

export const setCurrentPageAC = currentPage => ({
    type: SET_CURRENT_PAGE, 
    currentPage
})

export const setTotalUsersCountAC = totalCount => ({
    type: SET_TOTAL_USERS_COUNT, 
    totalCount
})