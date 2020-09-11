import React from 'react';

import styled from 'styled-components';

import Nav from '../Components/Nav';
// import Home from '../Pages/Home';
// import Calculator from '../Components/Calculator';
import Footer from '../Components/Footer';

const MainStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
` 

const Main = () => {
    return (
        <MainStyle>
            <Nav />
            {/* <Calculator /> */}
            {/* <Home /> */}
            <Footer />
        </MainStyle>
    );
};

export default Main;