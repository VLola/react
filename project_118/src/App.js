import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './index.css';
import Skills from './pages/Skills';

const App = () => {
 return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
 );
};

export default App;