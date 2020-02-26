import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../context/StateProvider';
import { StyledButton } from '../styles/StyledButton';

const StartButton = () => (
        <Link to="/test">
            <StyledButton>Begin</StyledButton>
        </Link>
);

export default StartButton;
