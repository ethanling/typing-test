import React, { useContext } from 'react';
import { KeyContext } from '../context/KeyProvider';

const Display = () => {
    const state = useContext(KeyContext);
    
    console.log(state.history)

	return (
		<p>Current Key: { state.currentKey }</p>
	)
}

export default Display;
