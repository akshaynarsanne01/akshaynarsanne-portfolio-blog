import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogHome from './pages/BlogHome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import SinglePost from './components/SinglePost';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  // List of routes where the Navbar should appear
  const navbarRoutes = ['/blog', '/login', '/signup', '/create', '/post/:id'];

  // Determine if the current route should show the Navbar
  const shouldShowNavbar = navbarRoutes.some((path) =>
    location.pathname.startsWith(path.replace(/:.*$/, '')) // Remove dynamic parts like ":id"
  );

  useEffect(() => {
    document.body.classList.add('animated-background');
    return () => {
      document.body.classList.remove('animated-background');
    };
  }, []);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className="container p-4 text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
