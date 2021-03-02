import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = p => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
                
    }
 
    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} />
            </>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId))
        },
        unfollow: userId => {
            dispatch(unFollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: totalCount => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: isFetching => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)