import React, { useContext } from 'react';
import { KeyContext } from '../context/KeyProvider';

const Display = () => {
    const { currentKey, history, test, matches } = useContext(KeyContext);

    const testTextArr = test.text.split('');

    const displayMatchColor = (index) => {
        if (matches[index] && index < matches.length) {
            return {color: 'green'};
        } else if (!matches[index] && index < matches.length) {
            return {color: 'red'}
        } else {
            return {color: 'black'}
        }
    }

	return (
        <div>
            <p>Current Key: { currentKey }</p>
            <p>Test text: { 
                testTextArr.map((letter, i) => 
                    <span key={i} style={
                        displayMatchColor(i)
                    }>
                        {letter}
                    </span>)
                }
                <br />
                { history.keys}
            </p>
        </div>
	)
}

export default Display;
