import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(1);
  const [vat, setVat] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);

  function addA() {
    setA(a + 1);
    console.log(a);
  }

  function handlePriceChange(e) {
    let p = parseFloat(e.target.value) || 0;
    setPrice(p);
    calculateGrossPrice(p, discount);
  }

  function handleDiscountChange(e) {
    let d = parseFloat(e.target.value) || 0;
    setDiscount(d);
    calculateGrossPrice(price, d);
  }

  function calculateGrossPrice(price, discount) {
    let gp = price - discount;
    setGrossPrice(gp);
    calculateVAT(gp);
  }

  function calculateVAT(grossPrice) {
    let v = grossPrice * 0.07;
    setVat(v.toFixed(2));
  }

  return (
    <div className="app-container">
      <header>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={viteLogo} className="logo vite" alt="Vite logo" />
        <h1>VAT Calculator</h1>
      </header>
      <main>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={handlePriceChange}
            style={{ fontSize: '20pt', margin: '10px' }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            id="discount"
            onChange={handleDiscountChange}
            style={{ fontSize: '20pt', margin: '10px' }}
          />
        </div>
        <p>Gross Price = {grossPrice}</p>
        <p>VAT = {vat}</p>
        <p>A = {a}</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <br />
          <button onClick={addA}>Add A</button>
        </div>
      </main>
      <footer>
        <p>© 2024 VAT Calculator</p>
      </footer>
    </div>
  );
}

export default App;
