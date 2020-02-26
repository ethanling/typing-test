import React, { useContext } from 'react';
import { StateContext } from '../context/StateProvider';
import { StyledButton } from '../styles/StyledButton';

const RestartButton = ({ text }) => {
    const [, dispatch] = useContext(StateContext);

    const resetState = () => {
        dispatch({ type: "reset"});
    }

    return <StyledButton onClick={resetState}>{text ? text : 'Restart'}</StyledButton>;
}

export default RestartButton;