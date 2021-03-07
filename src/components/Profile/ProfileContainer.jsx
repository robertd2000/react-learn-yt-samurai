import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfileThunc} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileThunc(userId)
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <div>
                    <Profile {...this.props} profile={this.props.profile} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfileThunc
})(withURLDataContainerComponent)