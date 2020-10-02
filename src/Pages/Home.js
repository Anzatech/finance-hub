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

            th {
                margin: 0 0 0.8rem 0;
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

    //commodities
    const [result, setResult] = useState([]);

    //forex
    const [usd, setUsd] = useState([]);
    const [gbp, setGbp] = useState([]);
    const [eur, setEur] = useState([]);
    const [zar, setZar] = useState([]);
    const [cny, setCny] = useState([]);

    //stocks
    const [stocks, setStocks] = useState([]);

    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/YuAVtXWGP6gzWlF2h/items?format=json&clean=1')
            .then(res => {
                setResult(res.data[0].result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //USD
    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/Chd6WcdZeeDcZ3V0p/items?format=json&clean=1')
            .then(res => {
                setUsd(res.data[0].usd)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //GBP
    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/ExYNzpCH8kw4XpU1q/items?format=json&clean=1')
            .then(res => {
                setGbp(res.data[0].gbp)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //EUR
    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/HdE0S4VyesNaCwiwD/items?format=json&clean=1')
            .then(res => {
                setEur(res.data[0].eur)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //ZAR
    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/I9XP04wZ9FLKdYinL/items?format=json&clean=1')
            .then(res => {
                setZar(res.data[0].zar)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //YUAN
    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/M45jfWXdbVK3bIprq/items?format=json&clean=1')
            .then(res => {
                setCny(res.data[0].cny)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //Stocks
    useEffect(()=> {
        axios.get('https://api.apify.com/v2/datasets/BaDSlivU4mk6MtJTA/items?format=json&clean=1')
            .then(res => {
                setStocks(res.data[0].stocks)
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
                                <th>Company</th>
                                <th>Opening Price(GHS)</th>
                                <th>Closing Price(GHS)</th>
                            </tr>
                            <tr>
                                <td>MTNGH</td>
                                <td>{stocks.mtnOpening}</td>
                                <td>{stocks.mtnClosing}</td>
                            </tr>
                            <tr>
                                <td>GCB</td>
                                <td>{stocks.gcbOpening}</td>
                                <td>{stocks.gcbClosing}</td>
                            </tr>
                            <tr>
                                <td>GGBL</td>
                                <td>{stocks.ggblOpening}</td>
                                <td>{stocks.ggblClosing}</td>
                            </tr>
                            <tr>
                                <td>GOIL</td>
                                <td>{stocks.goilOpening}</td>
                                <td>{stocks.goilClosing}</td>
                            </tr>
                            <tr>
                                <td>Ecobank Gh.</td>
                                <td>{stocks.eghOpening}</td>
                                <td>{stocks.eghClosing}</td>
                            </tr>
                        </table>
                    </div>
                    <div className = 'forex'>
                        <p>Foreign Exchange <small>(base=GHS)</small></p>
                        <table className = 'table foreign'>
                            <tr>
                                <th>Currency</th>
                                <th>GHS equivalent</th>
                            </tr>
                            <tr>
                                <td>US Dollar</td>
                                <td>{usd.dollar}</td>
                            </tr>
                            <tr>
                                <td>GB Pounds</td>
                                <td>{gbp.pound}</td>
                            </tr>
                            <tr>
                                <td>Euros</td>
                                <td>{eur.euros}</td>
                            </tr>
                            <tr>
                                <td>South African Rand</td>
                                <td>{zar.rand}</td>
                            </tr>
                            <tr>
                                <td>Chinese Yuan</td>
                                <td>{cny.yuan}</td>
                            </tr>
                        </table>
                    </div>
                    <div className = 'commodity'>
                        <p>Commodities</p>
                        <table className = 'table commodities'>
                            <tr>
                                <th>Commodity</th>
                                <th>Price</th>
                            </tr>
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