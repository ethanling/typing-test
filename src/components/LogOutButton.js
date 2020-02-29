import React from 'react';
import appAuth from '../authentication/config'
import Button from './Button';

const LogOutButton = () => {
    
    const handleSignOut = () => {
        console.log('Signed Out');
        appAuth.auth().signOut();
    }

    return (
        <Button action={ handleSignOut } text='Sign Out' />
    )
}

export default LogOutButton;