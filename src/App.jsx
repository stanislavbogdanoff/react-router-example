import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";

const usersData = [
  {
    id: 228,
  },
  {
    id: 499,
  },
  {
    id: 144,
  },
];

function App() {
  return (
    <Router>
      {/* <header>
        <nav>
          <h2>React Router test app</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {usersData.map((user) => {
              return (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>User #{user.id}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
