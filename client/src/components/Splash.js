import React from 'react';
import { StyledSplash } from '../styles/StyledSplash';

const Splash = ({ children }) => {
    return (
        <StyledSplash>
            <h1>Becoming a better typist takes: </h1>
            {children}
        </StyledSplash>
    );
}

export default Splash;
