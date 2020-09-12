import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'; 

import styled from 'styled-components';
// import Calculator from '../Components/Calculator';

const CalculatorStyle = styled.div`
    height: 45%;
    background-color: #5C80BC;
    padding: 2rem 0;

    .calculator {
        margin: 1rem 0;
        background-color: #5C80BC;
        
        a {
            padding: 1rem;
            margin: 3rem 0;
            color: white;
            text-decoration: none;
        }

        a:hover {
            color: black;
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
        border-bottom: 2px #5C80BC solid;
        color: #84DCC6;
    }

    .market-content {
        display:flex;
        justify-content: space-between;

        p {
            text-align:left;
            background-color: #5C80BC;
            color: white;
            padding: 0.5rem;
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

    .blog-content .blogs {
        text-align: left;
        padding: 1rem 0;
        border-bottom: 2px #5C80BC solid;
        color: #84DCC6;
    }
`

const Home = () => {
    return (
        <div>
            {/* <Calculator /> */}
            <CalculatorStyle>
            <div className='calculator'>
                <Link to='/investment'>INVESTMENT CALCULATOR</Link><> || </>
                <Link to='/forex'>FOREX</Link><> || </>
                <Link to='/tax'>TAX CALCULATOR</Link>
            </div>
        </CalculatorStyle>
        <Switch>
        <Route path='/investment' render={ ()=> <div className = 'calc investment'><input placeholder='amount' /> <input placeholder='%' /> <input placeholder ='result' /> <p>Interest per annum per BOG is 13.7%</p> </div>}/>
        <Route path='/forex' render={ ()=> <div className = 'calc forex'><input placeholder='amount' /> <input placeholder='%' /> <input placeholder ='result' /></div>}/>
        <Route path='/tax' render={ ()=> <div className = 'calc tax'><input placeholder='amount' /> <input placeholder='%' /> <input placeholder ='result' /></div>}/>
        </Switch>
        {/* <Route exact path='/' component={Home}/> */}
            <BodyStyle>
                <p className='markets'>MARKETS</p>
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
                    <p className = 'blogs'>BLOGS</p>
                    <div className = 'blog-posts'>
                        <p>Coming Soon</p>
                    </div>
                </div>
            </BodyStyle>
        </div>
    );
};

export default Home;