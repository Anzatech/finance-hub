import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import styled from 'styled-components';

import Home from '../Pages/Home';


const NavStyle = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    top: 0;

    .logo-anza {
        a {
            text-decoration:none;
            color: #0080BC;
        }
        a:visited {
            color: #0080BC;
        }
    }

    .menu-search {
        display: flex;
        // margin-top: 1.5rem;
        justify-content: space-between;
        align-items: center;

        .nav-menu a {
            margin-right:1rem;
            text-decoration: none;
            color: #0080BC;
            padding: 1rem;
            border-radius: 1.6rem;

            a:hover {
                background-color: #0080BC;
                color: #FFFFFF;
            }
        }

        .search-box {
            margin-left: 1rem;

            .search {
                padding: 0.3rem;
                border-radius: 0.6rem;
                border: 0.1rem solid #0080BC;
            }
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
                    <Link to='/'><ScrollLink activeClass='active'  to='tbills' smooth={true}>INVESTMENT CALCULATOR</ScrollLink></Link>
                    <Link to='/'><ScrollLink activeClass='active'  to='forex' smooth={true}>FOREX</ScrollLink></Link>
                    <Link to='/'><ScrollLink activeClass='active'  to='tax' smooth={true}>TAX CALCULATOR</ScrollLink></Link>
                </div>
                <div className='search-box'>
                    <input 
                        name='search'
                        placeholder='Search'
                        className='search'
                    />
                </div>
            </div>
        </NavStyle>
            <Switch>
                <Route exact path = '/' component={Home}/>
            </Switch>
        </>
    );
};

export default Nav;