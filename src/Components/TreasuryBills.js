import React from 'react';

import styled from 'styled-components';

const TBillsStyle = styled.div`
    background-color: #0080BC;
    width: 40%;
    padding: 2rem;
    margin: 2rem auto;
`

const TreasuryBills = () => {

    return (
        <TBillsStyle className='tbills' name='tbills'>
            <h4><p>TREASURY BILLS</p></h4>
            <p>Amount to be invested:</p>
            <input 
                name='amount'
                placeholder='Amount'
            />
            <p>Security type(tenure)</p>
            <select>
                <option value='91'>91 day bill</option>
                <option value='182'>182 day bill</option>
                <option value='364'>364 day bill</option>
            </select>
            <button>Calculate</button>
            <p>Returns at end of tenure:</p>
            <p>GHS</p>
        </TBillsStyle>
    );
};

export default TreasuryBills;