import React from 'react';

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3 mb-3 border-bottom">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#intro" className="nav-link">
              Introduction
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacts" className="nav-link">
              Contacts
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
