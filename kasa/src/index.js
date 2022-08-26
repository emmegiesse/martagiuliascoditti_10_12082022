import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homepage';
import Error from './pages/error';
import Property from './pages/property';
import About from "./pages/about";
import "./style/index.css";
//import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <main className="design">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="about" element={<About/>} />
            <Route path="housing/:id/*" element={<Property/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </main>
      <Footer />   
    </Router>
  </React.StrictMode>
);