import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'remixicon/fonts/remixicon.css';
import Navbar from './components/Navbar.jsx';
import PreLoader from './components/PreLoader.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <Navbar />
    <App />
  </StrictMode>
);
