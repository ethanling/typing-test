import React, { useContext } from 'react';
import { allTests } from '../allTests';
import { StateContext } from "../context/StateProvider";
import { StyledTestContainer } from "../styles/StyledTest";
import { StyledSelect } from "../styles/StyledForm";

const TestPicker = () => {
    console.log(allTests)
    const [, dispatch] = useContext(StateContext);

    const handleChange = (event) => {
        if (event.target.value) {
            // matches selection to test of same name
            const selectedTest = allTests.filter(a => a.test.name === event.target.value);
            // Filter returns array, so convert to object
            const selected = selectedTest[0].test
            dispatch({ type: 'setTest', testObj: selected });
        }
    }

    return (
        <StyledTestContainer>
            Pick Test:
            <StyledSelect name={"Choose Topic"} onChange={handleChange}>
                <option value="">Choose Topic</option>
                {allTests.map((item, i) => (
                    <option key={i} value={item.test.name}>{item.test.name}</option>
                ))}
            </StyledSelect>
        </StyledTestContainer>
    );
}

export default TestPicker;
