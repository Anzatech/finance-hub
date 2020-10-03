import React, {useState} from 'react';

import styled from 'styled-components';

const TaxStyle = styled.div`
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

    .tax-results {
        display: flex;
        justify-content: space-around;
    }
`

// initialFormValues
const initialFormValues = {
    grossIncome: 0,
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
const Form = ({formValues, netIncome, handleChange, onSubmit, isDisabled}) => {
    return (
        <>
            <TaxStyle className='tax' name='tax'>
                <h4><p>TAX CALCULATOR</p></h4>
                <label for='income'>Gross income</label>
                <p>
                    <input 
                        name='income'
                        id='income'
                        placeholder='Enter monthly gross income'
                        value={formValues.grossIncome}
                        type='number'
                        onChange={handleChange}
                    />
                </p>
                <label for='allowance'>Monthly allowances</label>
                {/* <p>
                    <input 
                        name='allowance'
                        id='allowance'
                        placeholder='Enter allowances'
                        defaultValue={formValues.allowances}
                        type='number'
                        onChange={handleChange}
                    />
                </p>
                <label for='taxRelief'>Tax relief</label>
                <p>
                    <input 
                        name='taxRelief'
                        id='taxRelief'
                        placeholder='Enter tax relief'
                        defaultValue={formValues.taxRelief}
                        type='number'
                        onChange={handleChange}
                    />
                </p> */}
                <p><button onClick={onSubmit} disabled={isDisabled()} className='button-calculate'>Calculate</button></p>
                <div className='tax-results'>
                    <div className='tax-info'>
                        <p>Net income</p>
                        <p>Income tax</p>
                        <p>SSNIT</p>
                    </div>
                    <div className='tax-result'>
                        <p>GHS {netIncome.netIncomeResult}</p>
                        <p>GHS {netIncome.incomeTax}</p>
                        <p>GHS {netIncome.ssnit}</p>
                    </div>
                </div>
            </TaxStyle>
        </>
    )
}

const Tax = () => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [netIncome, setNetIncome] = useState(initialResult);

    // changes
    const handleChange = (event) => {
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
            handleChange={handleChange}
            isDisabled={isDisabled}
        />
    );
};

export default Tax;