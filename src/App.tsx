import { AppContainer } from './App.styled';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages';

import { User } from './pages/user';

import { Candidate } from './pages/candidate';
function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/candidate" element={<Candidate />}></Route>
        </Routes>
      </Router>

    </AppContainer>
  );
}

export default App;
