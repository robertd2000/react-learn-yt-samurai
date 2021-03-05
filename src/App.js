import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Friends from './components/Sitebar/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  // const { messagesPage, sitebar } = state{dispatch, state, store}
  return (
      <div className='app__wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
            render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' 
              render={() => <ProfileContainer />} />

          <Route path='/users' 
              render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          {/* <Route path='/friends' 
            render={() => <Friends state={sitebar} />} /> */}
        </div>

      </div>    
  )
}

export default App;
