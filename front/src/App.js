import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Auth from "./components/auth/Auth";

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route exact path={'/auth'} element={<Auth />} />
                  {/*<Route />*/}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
