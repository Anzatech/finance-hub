import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Data from '../Pages/Data';
import Market from '../Pages/Market';
import Products from '../Pages/Products';
import Services from '../Pages/Services';
import Home from '../Pages/Home';


const NavStyle = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;

    .logo-anza {
        a {
            text-decoration:none;
        }
    }

    .menu-search {
        display: flex;
        margin-top: 1.5rem;
        justify-content: space-between;

        .nav-menu a {
            margin-right:1rem;
            text-decoration: none;
            color: #84DCC6;
        }

        .search {
            margin-left: 1rem;
        }
    }
`

const Nav = () => {
    return (
        <>
        <NavStyle>
            <div className='logo-anza'>
                <div className='logo'>
                    <Link to='/'><h2>anza.com</h2></Link>
                </div>
            </div>
            <div className='menu-search'>
                <div className='nav-menu'>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/market'>Market</Link>
                    <Link to='/data'>Data</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className='search'>
                    <input 
                        name='search'
                        placeholder='Search'
                    />
                </div>
            </div>
        </NavStyle>
            <Switch>
                <Route exact path = '/' component={Home}/>
                <Route path = '/about' component={About} />
                <Route path = '/blog' component={Blog} />
                <Route path = '/data' component={Data} />
                <Route path = '/market' component={Market} />
                <Route path = '/products' component={Products} />
                <Route path = '/services' component={Services} />

                <Route 
                    path='/investment' 
                    render={ ()=> 
                    <div className = 'calc investment'>
                        <input placeholder='amount' /> 
                        <input placeholder='%' /> 
                        <input placeholder ='result' /> 
                        <p>Interest per annum per BOG is 13.7%</p> 
                    </div>}
                />
                <Route 
                    path='/forex' 
                    render={ ()=> 
                    <div className = 'calc forex'>
                        <input placeholder='amount' /> 
                        <input placeholder='%' /> 
                        <input placeholder ='result' />
                    </div>}
                />
                <Route 
                    path='/tax' 
                    render={ ()=> 
                    <div className = 'calc tax'>
                        <input placeholder='amount' /> 
                        <input placeholder='%' /> 
                        <input placeholder ='result' />
                    </div>}
                />
            </Switch>
        </>
    );
};

export default Nav;