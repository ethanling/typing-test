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

    // TODO:
    // Add multiple categories to select from beyond just topic
    // change displayed results with filter method

    return (
        <StyledTestContainer>
            Pick Test:
            <StyledSelect name={"Choose Topic"} onChange={handleChange}>
                <StyledOption value="">Choose Topic</StyledOption>
                {allTests.map((a, i) => (
                    <StyledOption key={i} value={a.test.name}>{a.test.name}</StyledOption>
                ))}
            </StyledSelect>
        </StyledTestContainer>
    );
}

export default TestPicker;