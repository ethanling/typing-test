import React, { useContext } from 'react';
import { KeyContext } from '../context/KeyProvider';

const Display = () => {
	const key = useContext(KeyContext);

	return (
		<p>Current Key: { key.currentKey }</p>
	)
}

export default Display;
