// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import URLList from "./Components/URLList";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

const initialUrls = [
  { path: "/page1", label: "Google", clicks: 0 },
  { path: "/page2", label: "Instagram", clicks: 0 },
  { path: "/page3", label: "Youtube", clicks: 0 },
];

export default function App() {
  const [urls, setUrls] = useState(initialUrls);

  const handleClick = (path) => {
    setUrls((prev) =>
      [...prev]
        .map((url) =>
          url.path === path ? { ...url, clicks: url.clicks + 1 } : url
        )
        .sort((a, b) => b.clicks - a.clicks)
    );
  };

  return (
    <Router>
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header bg-dark text-white text-center">
            <h2>URL Click Tracker</h2>
          </div>
          <div className="card-body">
            <URLList urls={urls} onClick={handleClick} />
            <Routes>
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
