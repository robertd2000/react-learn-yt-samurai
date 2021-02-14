import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Friends from './components/Sitebar/Friends';

const App = ({state, addPost}) => {
  const {profilePage, messagesPage, sitebar} = state
  return (
      <div className='app__wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
            render={() => <Dialogs 
              state={messagesPage} />} />
          <Route path='/profile' 
            render={() => <Profile 
              state={profilePage}
              addPost={addPost} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/friends' 
            render={() => <Friends state={sitebar} />} />
        </div>

      </div>    
  )
}

export default App;
