import React from 'react';
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header>
        <h1>Welcome to Inventory Management System</h1>
        <p>An Inventory Management System is a software solution designed to help businesses track, organize, and manage their stock or inventory efficiently. It automates tasks such as inventory tracking, stock level monitoring, order management, and reporting, ensuring optimal inventory levels and minimizing waste or stockouts.</p>
      </header>
    </div>
  );
};

export default Home;
