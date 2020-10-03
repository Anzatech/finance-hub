import React, {useState} from 'react';

import styled from 'styled-components';

const TBillsStyle = styled.div`
    background-color: #0080BC;
    width: 40%;
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 0.35rem;

    input{
        padding: 0.5rem;
        border-radius: 0.45rem;
    }

    button {
        padding: 0.5rem;
        border-radius: 0.45rem;
    }

    .tbills {
        display: flex;
        justify-content: space-around;
    }
`
// initial form values
const initialFormValues = {
    amount: 0,
    rate: 0,
}

// initial results
const initialResults = {
    result91: 0,
    result182: 0,
    result364: 0,
    result3Year: 0
}

// form
const Form = ({formValues, tenureResults, handleChange, onSubmit, isDisabled}) => {
    return (
        <>
            <TBillsStyle className='tbills' name='tbills'>
                <h4><p>TREASURY BILLS CALCULATOR</p></h4>
                <label for='amount'>Amount to be invested</label>
                <p>
                    <input 
                        name='amount'
                        id='amount'
                        placeholder='Enter amount'
                        value={formValues.amount}
                        type='number'
                        onChange={handleChange}
                    />
                </p>
                <label for='rate'>Rate in %</label>
                <p> 
                    <input 
                        name='rate'
                        id='rate'
                        placeholder='Enter rate'
                        value={formValues.rate}
                        type='number'
                        onChange={handleChange}
                    />
                </p>
                <p><button onClick={onSubmit} disabled={isDisabled()}>Calculate</button></p>
                <div className='tbills'>
                    <div className='packages'>
                    <h4>Security type(tenure)</h4>
                        <p>91 day bill</p>
                        <p>182 day bill</p>
                        <p>364 day bill</p>
                        <p>3 Year FXR bond</p>
                    </div>
                    <div className='interest'>
                    <h4>Interest generated</h4>
                        <p>GHS {tenureResults.result91}</p>
                        <p>GHS {tenureResults.result182}</p>
                        <p>GHS {tenureResults.result364}</p>
                        <p>GHS {tenureResults.result3Year}</p>
                    </div>
                </div>
            </TBillsStyle>
        </>
    )
}


const TreasuryBills = () => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [tenureResults, setTenureResults] = useState(initialResults);

    // changes
    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value})
    }

    // submit
    const handleSubmit = (event) => {
        event.preventDefault();

        let total91 = parseFloat(formValues.rate)/100 * parseFloat(formValues.amount) * 0.25 
        let total182 = parseFloat(formValues.rate)/100 * parseFloat(formValues.amount) * 0.5 
        let total364 = parseFloat(formValues.rate)/100 * parseFloat(formValues.amount)
        let total3Year = parseFloat(formValues.rate)/100 * parseFloat(formValues.amount) + total364 * 3
        
        setTenureResults({result91: total91.toFixed(2), result182: total182.toFixed(2), result364: total364.toFixed(2), result3Year: total3Year.toFixed(2)})
    }

    // isDisabled
    const isDisabled = () => !(formValues.amount && formValues.rate) 

    return (
        <Form 
            formValues={formValues}
            tenureResults={tenureResults}
            onSubmit={handleSubmit}
            handleChange={handleChange}
            isDisabled={isDisabled}
        />
    );
};

export default TreasuryBills;