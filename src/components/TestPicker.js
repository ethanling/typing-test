import React, { useContext } from 'react';
import { allTests } from '../allTests';
import { StateContext } from "../context/StateProvider";
import { StyledTestContainer } from "../styles/StyledTest";
import { StyledSelect, StyledOption } from "../styles/StyledForm";

const TestPicker = () => {
    const [, dispatch] = useContext(StateContext);

    const handleChange = (event) => {
        if (event.target.value) {
            // matches selection to test of same name
            const selectedTest = allTests.filter(a => a.test.name === event.target.value);
            // Filter returns array, so convert to object
            dispatch({ type: 'setTest', testObj: selectedTest[0].test });
        }
    }

    return (
        <StyledTestContainer>
            Pick Test:
            <StyledSelect name={'Choose Topic'} onChange={handleChange}>
                <StyledOption value="">Choose Topic</StyledOption>
                <StyledOption value="Baseball">Baseball</StyledOption>
                <StyledOption value="Basketball">Basketball</StyledOption>
                <StyledOption value="Football">Football</StyledOption>
            </StyledSelect>
        </StyledTestContainer>
    );
}

export default TestPicker;