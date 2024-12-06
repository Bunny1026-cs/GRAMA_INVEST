import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Learn Finance</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>Learn Finance is your go-to platform for mastering financial concepts and skills.</p>
        </section>
        <section id="courses">
          <h2>Our Courses</h2>
          <p>Explore our wide range of courses designed to help you understand finance better.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to us at contact@learnfinance.com.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Learn Finance. All rights reserved.</p>
        <button className="cta-button">Subscribe</button>
      </footer>
    </div>
  );
}

export default App;
