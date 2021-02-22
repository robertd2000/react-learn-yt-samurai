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
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = ({dispatch, state, store}) => {
  const { messagesPage, sitebar } = state
  return (
      <div className='app__wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
            render={() => <DialogsContainer 
              store={store}
              />} />
          <Route path='/profile' 
              render={() => <Profile
                store={store}
            />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/friends' 
            render={() => <Friends state={sitebar} />} />
        </div>

      </div>    
  )
}

export default App;
