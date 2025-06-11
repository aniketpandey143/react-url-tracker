// src/components/URLList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function URLList({ urls, onClick }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    onClick(path);
    navigate(path);
  };

  return (
    <div className="d-grid gap-3">
      {urls.map((url) => (
        <button
          key={url.path}
          className="btn btn-outline-primary btn-lg fw-semibold shadow-sm"
          onClick={() => handleClick(url.path)}
        >
          {url.label} <span className="badge bg-secondary ms-2">{url.clicks}</span>
        </button>
      ))}
    </div>
  );
}