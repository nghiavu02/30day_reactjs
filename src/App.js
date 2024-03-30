import "./index.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Nav></Nav>}>
            <Route path="/" element={<>Home Page</>}></Route>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<>This is the 404 page</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
