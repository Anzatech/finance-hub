import React from 'react';

import styled from 'styled-components';

const FooterStyle = styled.div`
    background-color: #5C80BC;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top:auto;
    padding: 3rem;
    color: white;

    .footer-menu {
        display: flex;

        a {
            text-decoration: none;
        }

        a:visited {
            color: white;
        }

        ul {
            list-style-type: none;
        }

        .subscribe {
            margin-left: 2rem;
        }
    }

`

const Footer = () => {
    return (
        <FooterStyle>
            <div className='company'>
                <p>ANZA</p>
                <small>Copyright &#169; Anza Tech 2020</small>
            </div>
            <section className='footer-menu'>
                <div>
                    <ul>
                        <a href='www.google.com' ><li>About Us</li></a>
                        <a href='www.google.com' ><li>Contact</li></a>
                        <a href='www.google.com' ><li>Terms & Conditions</li></a>
                        <a href='www.google.com' ><li>Meet our Partner Banks</li></a>
                    </ul>
                </div>
                <div className='social-links'>
                    <ul>
                        <a href='www.google.com' ><li>Facebook</li></a>
                        <a href='www.google.com' ><li>Twitter</li></a>
                        <a href='www.google.com' ><li>Instagram</li></a>
                    </ul>
                </div>
                <div className='subscribe'>
                    <p>Subscribe to our newsletter</p>
                    <input placeholder='Email Address'/>
                    <button>Subscribe</button>
                </div>
            </section>
            <section className = 'contact-info'>
                <p>Anza Technologies, Accra - Ghana</p>
                <p>+233 000 000 000</p>
                <p>Email: anzatechgh@gmail.com</p>
            </section>
        </FooterStyle>
    );
};

export default Footer;