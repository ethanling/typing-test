import React, { useContext } from 'react';

const TestSettings = () => {
    const [state, dispatch] = useContext(StateContext);

    const setTest = () => {
        // ...
    }

    return (
        <div>
            <h2>Settings</h2>

        </div>
    )
}

export default TestSettings;