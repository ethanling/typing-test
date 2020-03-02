import React from 'react';
import { StyledSplash } from '../styles/StyledSplash';

const Splash = ({ children }) => {
    return (
        <StyledSplash>
            <h1>Typing Test</h1>
            {children}
        </StyledSplash>
    );
}

export default Splash;