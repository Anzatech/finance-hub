import React, {useState} from 'react';

import axios from 'axios';
import styled from 'styled-components';

const ForexStyle = styled.div`
    background-color: #0080BC;
    width: 40%;
    padding: 2rem;
    margin: 2rem auto;
`

const Forex = () => {

    const [result, setResult] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('GHS');
    const [toCurrency, setToCurrency] = useState('USD');
    const [amount, setAmount] = useState('');
    const [rates, setRates] = useState([]);

    const convertor = () => {
            axios
                .get(`http://data.fixer.io/api/latest?access_key=651c0b57cb94cb75ee385d0af3a2c3e3`)
                .then(response => {
                  console.log(response)
                  setResult({ result: result.toFixed(5)})
                  // console.log(result)
                  // setResult({result: (amount * response.data.rates).toFixed(5)})
                  setRates({rates: response.data.rates})
                  // console.log(response.data.rates)
                  setFromCurrency({fromCurrency: response.data.rates})
                  setToCurrency({toCurrency: response.data.rates})
                  // console.log(fromCurrency)
                  // console.log(rates)
                }) 
                .catch(error => {
                    console.log(error.message)
                })
              }
    
    const handleChange = event => {
      setAmount({amount: event.target.value})
    }

    const selectHandler = event => {
        if (event.target.name === 'from'){
            setFromCurrency({ fromCurrency: event.target.value })
        } else {
            if (event.target.name === 'to') {
              setToCurrency({ toCurrency: event.target.value });
            }
        }
    }

    return (
        <ForexStyle className='forex' name='forex'>
        <div className="Converter">
          <span>Currency Converter</span>
        <div className="amount">
          <p>Amount</p>
          <input
            name="amount"
            type="number"
            placeholder='Amount'
            // value={amount}
            onChange={handleChange}
          />
          <select
            name="from"
            onChange={event => selectHandler(event)}
            value={fromCurrency}
          >
            {rates.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
            {/* <option value='USD'>USD</option>
            <option value='GHS'>GHS</option>
            <option value='GBP'>GBP</option>
            <option value='CAD'>CAD</option> */}
          </select>
          <select
            name="to"
            onChange={event => selectHandler(event)}
            value={toCurrency}
          >
            {rates.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
            {/* <option value='GHS'>GHS</option>
            <option value='GHS'>USD</option>
            <option value='GHS'>GBP</option>
            <option value='GHS'>CAD</option> */}
          </select>
          <button onChange={convertor}>Convert</button>
          {result && <h3>{result}</h3>}
        </div>
      </div>
      </ForexStyle>
    );
};

export default Forex;