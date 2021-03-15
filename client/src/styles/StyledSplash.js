import styled from 'styled-components';
import bg from '../images/keyboard-closeup.svg';

export const StyledSplash = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: relative;
    flex: 1;
    width: 100vw;

    h1 {
        font-size: 3em;
        max-width: 90vw;
        color: #1c1c1c;
    }

    p {
        font-size: 1.7em;
        margin-bottom: 20px;
    }
`;
