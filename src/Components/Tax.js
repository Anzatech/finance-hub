import React, {useState} from 'react';

import styled from 'styled-components';

const TaxStyle = styled.div`
    background-color: #0080BC;
    width: 40%;
    padding: 2rem;
    margin: 2rem auto;
`

// initialFormValues
const initialFormValues = {
    grossIncome: 0
    // taxRelief: 0,
    // allowances: 0
}

// initial result
const initialResult = {
    netIncomeResult: 0,
    incomeTax: 0,
    ssnit: 0
}

// form
const Form = ({formValues, netIncome, onhandleChange, onSubmit, isDisabled}) => {
    return (
        <>
            <TaxStyle>
                <h4><p>Tax Calculator</p></h4>
                <label for='income'>Enter your gross income</label>
                <input 
                    name='income'
                    id='income'
                    placeholder='Enter monthly gross income'
                    value={formValues.grossIncome}
                    type='number'
                    onChange={onhandleChange}
                />
                {/* <label for='allowance'>Enter monthly allowances</label>
                <input 
                    name='allowance'
                    id='allowance'
                    placeholder='Enter allowances'
                    value={formValues.allowances}
                    type='number'
                    onChange={handleChange}
                />
                <label for='taxRelief'>Enter tax relief</label>
                <input 
                    name='taxRelief'
                    id='taxRelief'
                    placeholder='Enter tax relief'
                    value={formValues.taxRelief}
                    type='number'
                    onChange={handleChange} */}
                {/* /> */}
                <p><button onClick={onSubmit} disabled={isDisabled()} className='button-calculate'>Calculate</button></p>
                <p>Net income: GHS {netIncome.netIncomeResult}</p>
                <p>Income tax: GHS {netIncome.incomeTax}</p>
                <p>SSNIT: GHS {netIncome.ssnit}</p>
            </TaxStyle>
        </>
    )
}

const Tax = () => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [netIncome, setNetIncome] = useState(initialResult);

    // changes
    const onhandleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value})
    }

    // submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if (parseFloat(formValues.grossIncome) === 319) {
            setNetIncome({netIncomeResult: 319, incomeTax: 0, ssnit: 0})
        } else if(parseFloat(formValues.grossIncome) < 319 && parseFloat(formValues.grossIncome) > 0){
            setNetIncome({netIncomeResult: formValues.grossIncome, incomeTax: 0, ssnit: 0})
        } else if(parseFloat(formValues.grossIncome) > 319 && parseFloat(formValues.grossIncome) < 419){
            setNetIncome({netIncomeResult: formValues.grossIncome, incomeTax: 0, ssnit: 0})
        } else if(parseFloat(formValues.grossIncome) === 419){
            setNetIncome({netIncomeResult: parseFloat(formValues.grossIncome) - 5 - (0.055 * parseFloat(formValues.grossIncome)), 
            incomeTax: parseFloat(formValues.grossIncome) - 5, ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) > 419 && parseFloat(formValues.grossIncome) < 539) {
            setNetIncome({netIncomeResult: parseFloat(formValues.grossIncome) - 5 - (0.055 * parseFloat(formValues.grossIncome)), 
            incomeTax: parseFloat(formValues.grossIncome) - 5, ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) === 539){
            setNetIncome({netIncomeResult: parseFloat(formValues.grossIncome) - 17 - (0.055 * parseFloat(formValues.grossIncome)), 
            incomeTax: parseFloat(formValues.grossIncome) - 17, ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) > 539 && parseFloat(formValues.grossIncome) < 3539){
            setNetIncome({netIncomeResult: parseFloat(formValues.grossIncome) - 17 - (0.055 * parseFloat(formValues.grossIncome)), 
            incomeTax: parseFloat(formValues.grossIncome) - 17, ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) === 3539){
            setNetIncome({netIncomeResult: parseFloat(formValues.grossIncome) - 542 - (0.055 * parseFloat(formValues.grossIncome)),
            incomeTax: parseFloat(formValues.grossIncome) - 542, ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) > 3539 && parseFloat(formValues.grossIncome) < 20000){
            setNetIncome({netIncomeResult: parseFloat(formValues.grossIncome) - 542 - (0.055 * parseFloat(formValues.grossIncome)),
            incomeTax: parseFloat(formValues.grossIncome) - 542, ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) === 20000){
            setNetIncome({netIncomeResult: (parseFloat(formValues.grossIncome) - 4,657.25) - (0.055 * parseFloat(formValues.grossIncome)),
            incomeTax: (parseFloat(formValues.grossIncome) - 4,657.25), ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } else if(parseFloat(formValues.grossIncome) > 20000){
            setNetIncome({netIncomeResult: (parseFloat(formValues.grossIncome) * 0.3) - (0.055 * parseFloat(formValues.grossIncome)),
            incomeTax: (parseFloat(formValues.grossIncome) * 0.3), ssnit: 0.055 * parseFloat(formValues.grossIncome)})
        } 
    }

    // isDisabled
    const isDisabled = () => !(formValues.grossIncome)

    return (
        <Form 
            formValues={formValues}
            netIncome={netIncome}
            onSubmit={handleSubmit}
            onhandleChange={onhandleChange}
            isDisabled={isDisabled}
        />
    );
};

export default Tax;