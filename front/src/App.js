import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Auth from "./components/auth/Auth";
import Chats from "./components/chats/Chats";
import Chat from "./components/chat/Chat";

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route exact path={'/auth'} element={<Auth />} />
                  <Route exact path={'/chats'} element={<Chats />} />
                  <Route path={'/chat'} element={<Chat />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
