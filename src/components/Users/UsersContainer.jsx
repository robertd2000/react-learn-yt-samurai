import React from 'react';
import { connect } from 'react-redux';
import { unFollowSuccess, followSuccess, setCurrentPage, toggleIsFollowingProgress, getUsers, follow, unFollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = p => {
        this.props.getUsers(p, this.props.pageSize)
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
                    unfollow={this.props.unfollow}
                    followingIsProgreess={this.props.followingIsProgreess}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress} />
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
        isFetching: state.usersPage.isFetching,
        followingIsProgreess: state.usersPage.followingIsProgreess
    }
}


export default compose(
    connect(mapStateToProps, {
        followSuccess, 
        unFollowSuccess, 
        setCurrentPage, 
        getUsers,
        follow,
        unFollow,
    }
)
)(UsersContainer)