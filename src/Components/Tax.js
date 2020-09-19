import React from 'react';

import styled from 'styled-components';

const TaxStyle = styled.div`
    background-color: #0080BC;
    width: 40%;
    padding: 2rem;
    margin: 2rem auto;
`

const Tax = () => {
    return (
        <TaxStyle className='tax' name='tax'>
            <h4><p>Tax</p></h4>
            <input 
                name='income'
                placeholder='Income'
            />
            <button className='button-calculate'>Calculate</button>
            <p>Tax to be paid:</p>
            <p>GHS</p>
        </TaxStyle>
    );
};

export default Tax;