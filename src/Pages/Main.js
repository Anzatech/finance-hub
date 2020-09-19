import React from 'react';

import styled from 'styled-components';

import Nav from '../Components/Nav';
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
            <Footer />
        </MainStyle>
    );
};

export default Main;