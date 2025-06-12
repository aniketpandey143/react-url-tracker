// src/components/URLList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function URLList({ urls, onClick }) {
  const navigate = useNavigate();

  // when a button is clicked, first update clicks,
  // then navigate to the correct page
  const handleClick = (path) => {
    onClick(path); // calling the parent click handler
    navigate(path); // moving to the selected route
  };

  return (
    <div className="d-grid gap-3">
      {/* looping through each URL to show as button */}
      {urls.map((url) => (
        <button
          key={url.path}
          className="btn btn-outline-primary btn-lg fw-semibold shadow-sm"
          onClick={() => handleClick(url.path)} // button click triggers handleClick
        >
          {url.label}
          {/* showing how many times this was clicked */}
          <span className="badge bg-secondary ms-2">{url.clicks}</span>
        </button>
      ))}
    </div>
  );
}