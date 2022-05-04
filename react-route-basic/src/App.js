import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Imported pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Admin from "./pages/Admin/Admin";
import Layout from './components/Layout/Layout';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Admin" element={<Admin />} >
            <Route path="Settings" element={<Settings />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;