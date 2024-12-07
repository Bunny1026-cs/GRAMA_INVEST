import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState(<p>Select a topic to see the details here.</p>);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.cxgenie.ai/widget.js";
    script.setAttribute('data-aid', 'bc88ed95-d796-4b33-9650-4dac3481462b');
    script.setAttribute('data-lang', 'en');
    document.body.appendChild(script);
  }, []);

  const showContent = (topic) => {
    let content;
    switch(topic) {
      case 'stockMarket':
        content = (
          <>
            <h2>Stock Market</h2>
            <p>The stock market is a collection of markets where stocks (shares of ownership in businesses) are bought and sold. It’s crucial for funding companies and provides investors with a platform for potential growth.</p>
          </>
        );
        break;
      case 'mutualFunds':
        content = (
          <>
            <h2>Mutual Funds</h2>
            <p>Mutual funds are investment programs funded by shareholders that trade in diversified holdings and are professionally managed. They allow investors to pool their money into a diversified portfolio.</p>
          </>
        );
        break;
      case 'cryptocurrency':
        content = (
          <>
            <h2>Cryptocurrency & Bitcoin</h2>
            <p>Cryptocurrency is a digital currency that uses cryptography for security and operates independently of a central bank. Bitcoin is the first and most well-known cryptocurrency, famous for its fluctuating value.</p>
          </>
        );
        break;
      case 'governmentSchemes':
        content = (
          <>
            <h2>Government Schemes</h2>
            <p>Government schemes are initiatives in which the government allocates resources to specific projects in order to improve the economy or society, such as various financial inclusion programs.</p>
          </>
        );
        break;
      case 'fixedRecurring':
        content = (
          <>
            <h2>Fixed Deposit & Recurring Deposit</h2>
            <p>A fixed deposit (FD) is a financial instrument providing a higher rate of interest than a regular savings account, until the given maturity date. A recurring deposit (RD) is a scheme where one can deposit a fixed amount regularly and earn interest.</p>
          </>
        );
        break;
      default:
        content = <p>Select a topic to see the details here.</p>;
    }
    setContent(content);
  };

  return (
    <div className="App">
      <header>
        <h2>Financial Literacy</h2>
        <nav>
          <input type="text" className="search-bar" placeholder="Search..." />
          <button onClick={() => showContent('about')}>About Us</button>
          <button onClick={() => showContent('contact')}>Contact</button>
          <button onClick={() => showContent('faq')}>FAQ</button>
        </nav>
      </header>
      <div className="container">
        <img src="gramainvest.jpg" alt="gramainvest" height="200px" />
        <br /><br />
        <h1>GRAMA INVEST</h1>
        <div className="button-container">
          <button className="glow-on-hover" onClick={() => showContent('stockMarket')}>Stock Market</button>
          <button className="glow-on-hover" onClick={() => showContent('mutualFunds')}>Mutual Funds</button>
          <button className="glow-on-hover" onClick={() => showContent('cryptocurrency')}>Cryptocurrency & Bitcoin</button>
          <button className="glow-on-hover" onClick={() => showContent('governmentSchemes')}>Government Schemes</button>
          <button className="glow-on-hover" onClick={() => showContent('fixedRecurring')}>Fixed Deposit & Recurring Deposit</button>
        </div>
        <div id="content" className="content-area">
          {content}
        </div>
      </div>
      <footer>
        <p>&copy; 2023 Learn Finance. All rights reserved.</p>
        <button className="cta-button">Subscribe</button>
      </footer>
    </div>
  );
}

export default App;
