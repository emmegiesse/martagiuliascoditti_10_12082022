import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import "./style/index.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/home';
import Error from './pages/error';
import House from './pages/house';
import About from "./pages/about";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL}>
  <main className='design'>
  <Header />
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="about" element={<About/>} />
  <Route path="*" element={<Error/>} />
  <Route path="housing/:id/*" element={<House/>} />
  </Routes>
  </main>
  <Footer />   
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);