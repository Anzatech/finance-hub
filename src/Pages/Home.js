import React, {useState, useEffect} from 'react';

import axios from 'axios';
import styled from 'styled-components';

import TBills from '../Components/TreasuryBills';
// import Forex from '../Components/Forex';
import Tax from '../Components/Tax';

const CalculatorStyle = styled.div`
    background-color: #0080BC;
    padding: 2rem 0;
    margin: auto;

    .message {
        margin: 1rem 0;
        background-color: #0080BC;
        color: #FFFFFF;

        .register {
            text-decoration: underline;
        }
        
        a {
            padding: 1rem;
            margin: 3rem 0;
            color: #FFFFFF;
            text-decoration: none;
        }

        a:hover {
            color: #000000;
        }
    }

    .calc {
        background-color: #5C80BC;
    }

`

const BodyStyle = styled.div`
    width: 75%;
    margin: 0 auto;

    .markets {
        text-align:left;
        padding: 1rem 0;
        border-bottom: 2px #0080BC solid;
        color: #0080BC;
    }

    .market-content {
        display:flex;
        justify-content: space-between;

        p {
            text-align:left;
            background-color: #0080BC;
            color: white;
            padding: 0.5rem;
            border-radius: 0.6rem;
        }

        div {
            width: 30%;
        }

        .table {
            width: 100%;

            tr {
                display:flex;
                justify-content: space-between;    
            }

            td {
                margin: 0.5rem 0;
            }
        }
    }

    .blog-content {
        height: 15rem;
        align-items: center;

        .blogs{
            text-align: left;
            padding: 1rem 0;
            border-bottom: 2px #0080BC solid;
            color: #0080BC;
        }
    }

    .calculators .calculator{
        text-align: left;
        padding: 1rem 0;
        border-bottom: 2px #0080BC solid;
        color: #0080BC;

        .calc-cards {
            display: flex;
        }
    }
`

const Home = () => {

    const [rates, setRates] = useState([]);
    const [date, setDate] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('http://data.fixer.io/api/latest?access_key=651c0b57cb94cb75ee385d0af3a2c3e3')
            .then(res => {
                setRates(res.data.rates)
                setDate(res.data.date)
            })
            .catch(err => {
                console.log(err)
            })
    }, [date])

    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/hfB8bubW1NhvQARZT/items?format=json&clean=1')
            .then(res => {
                setResult(res.data[0].result)
                console.log(res.data[0].result)
            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
        <div>
            <CalculatorStyle>
            <div className='message'>
                <p>Do you want to know the best bank to invest in?<a className='register' href='www.google.com'>Join us</a></p>
            </div>
            </CalculatorStyle>
            <BodyStyle>
                <h3><p className='markets'>MARKETS</p></h3>
                <div className='market-content'>
                    <div className = 'stocks'>
                        <p>Stocks</p>
                        <table className = 'table stock'>
                            <tr>
                                <td>Apple</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Microsoft</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Ecobank</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Vodafone</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>GTP</td>
                                <td>-2.5</td>
                            </tr>
                        </table>
                    </div>
                    <div className = 'forex'>
                        <p>Foreign Exchange <small>(base=EUR)</small></p>
                        <table className = 'table foreign'>
                            <tr>
                                <td>Ghana Cedi</td>
                                <td>{rates.GHS}</td>
                            </tr>
                            <tr>
                                <td>US Dollar</td>
                                <td>{rates.USD}</td>
                            </tr>
                            <tr>
                                <td>GB Pounds</td>
                                <td>{rates.GBP}</td>
                            </tr>
                            <tr>
                                <td>CD Dollar</td>
                                <td>{rates.CAD}</td>
                            </tr>
                            <tr>
                                <td>Yen</td>
                                <td>{rates.JPY}</td>
                            </tr>
                        </table>
                    </div>
                    <div className = 'commodity'>
                        <p>Commodities</p>
                        <table className = 'table commodities'>
                            <tr>
                                <td>Gold <small>($/troy ounce)</small></td>
                                <td>{result.gold}</td>
                            </tr>
                            <tr>
                                <td>Oil <small>($/barrel)</small></td>
                                <td>{result.brentCrude}</td>
                            </tr>
                            <tr>
                                <td>Cocoa <small>($/metric tonne)</small></td>
                                <td>{result.cocoa}</td>
                            </tr>
                            <tr>
                                <td>Natural Gas <small>($/million BTUs)</small></td>
                                <td>{result.gas}</td>
                            </tr>
                            <tr>
                                <td>Coffee <small>($/pound)</small></td>
                                <td>{result.coffee}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className = 'blog-content'>
                    <h3><p className = 'blogs'>BLOGS</p></h3>
                    <div className = 'blog-posts'>
                        <p>Coming Soon</p>
                    </div>
                </div>        
                <section className='calculators'>
                    <h3><p className='calculator'>CALCULATORS</p></h3>
                    <div className = 'calc-cards'>
                        <TBills className='tbills' name='tbills'/> 
                        {/* <Forex className='forex' name='forex' /> */}
                        <Tax className='tax' name='tax' /> 
                    </div>
                </section>
            </BodyStyle>     
        </div>
    );
};

export default Home;