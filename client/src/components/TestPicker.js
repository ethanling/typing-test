import { useState, useContext } from 'react';
import { StateContext } from "../context/StateProvider";
import { useWord } from '../hooks/useWord'
import { StyledContainer, StyledSelect } from "../styles/StyledForm";

const TestPicker = () => {
    const [, dispatch] = useContext(StateContext);
    const [duration, setDuration] = useState()
    const test = useWord()


    const setNewTest = () => {

        const testObj = {"test": {
            "text": test,
        }}
             
        dispatch({ type: 'setTest', testObj: testObj });
    }

    return (
        <StyledContainer>
        </StyledContainer>
    );
}

export default TestPicker;
