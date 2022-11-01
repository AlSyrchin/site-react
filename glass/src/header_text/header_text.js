import React from 'react';
import './header_text.css';

export default function HeaderText({ title, text }) {
  return (
    <div className="head_text">
      <h2>{title}</h2>
      <p>{text}</p>
      <span></span>
    </div>
  );
}