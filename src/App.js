import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './pages/Login';
import { UserContext } from './store/UserContext'

function App() {

  const {user, } = useContext(UserContext)

  return (
    <div className="app">
      <Header />
      {!user && <Login />}
      {user && (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

  </div>
  );
}

export default App;
