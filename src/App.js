import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Friends from './components/Sitebar/Friends';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { authThunc } from './redux/authReducer';
import { initializeApp } from './redux/appReducer';

import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { WithSuspense } from './hoc/withSuspense';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);

class App extends React.Component {
  // const { messagesPage, sitebar } = state{dispatch, state, store}
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app__wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={WithSuspense(ProfileContainer)}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/login" render={() => <Login />} />
          {/* <Route path='/friends' 
            render={() => <Friends state={sitebar} />} /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    authThunc,
    initializeApp,
  })
)(App);
