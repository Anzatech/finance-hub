import React from 'react';

import styled from 'styled-components';

import TBills from '../Components/TreasuryBills';
import Forex from '../Components/Forex';
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
    }
`

const Home = () => {

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
                        <p>Foreign Exchange</p>
                        <table className = 'table foreign'>
                            <tr>
                                <td>US Dollar</td>
                                <td>5.8</td>
                            </tr>
                            <tr>
                                <td>Euro</td>
                                <td>7.7</td>
                            </tr>
                            <tr>
                                <td>Pounds</td>
                                <td>8.4</td>
                            </tr>
                            <tr>
                                <td>CD Dollar</td>
                                <td>7.2</td>
                            </tr>
                            <tr>
                                <td>Yen</td>
                                <td>3.7</td>
                            </tr>
                        </table>
                    </div>
                    <div className = 'commodity'>
                        <p>Commodities</p>
                        <table className = 'table commodities'>
                            <tr>
                                <td>Gold</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Oil</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Cocoa</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Gas</td>
                                <td>-2.5</td>
                            </tr>
                            <tr>
                                <td>Coffee</td>
                                <td>-2.5</td>
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
                    <TBills className='tbills' name='tbills'/> 
                    <Forex className='forex' name='forex' />
                    <Tax className='tax' name='tax' /> 
                </section>
            </BodyStyle>     
        </div>
    );
};

export default Home;