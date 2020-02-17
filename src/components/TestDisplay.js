import React, { useContext } from 'react';
import { KeyContext } from '../context/KeyProvider';
import { StyledTestDisplay, StyledTestText } from '../styles/StyledTestDisplay';
import TestText from './TestText';
import CompletedTest from './CompletedTest';

const TestDisplay = () => {
    const { isComplete } = useContext(KeyContext);

	return (
        <StyledTestDisplay>
            <div>
                {isComplete ? 
                    (<CompletedTest />) 
                    : 
                    (<TestText />)
                }
            </div>
        </StyledTestDisplay>
    );
}

export default TestDisplay;
