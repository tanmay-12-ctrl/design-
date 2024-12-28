import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'; // Importing the Home component
import PostView from './components/PostView'; // Importing the PostView component
import Footer from './components/Footer'; // Importing the Footer component

function App() {
  return (
    <Router>
      {/* Header stays static across different pages */}
      <Header />

      <div className="main-content">
        {/* Define Routes for your components */}
        <Routes>
          {/* Default route to the Home component */}
          <Route path="/" element={<Home />} />

          {/* Route for individual PostView */}
          <Route path="/post/:postId" element={<PostView />} />
        </Routes>
      </div>

      {/* Footer component added here, so it appears across all pages */}
      <Footer />
    </Router>
  );
}

export default App;
