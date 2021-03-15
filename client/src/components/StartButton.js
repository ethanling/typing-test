import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const StartButton = () => (
        <Link to="/test">
            <Button text="Begin" dark={true} textSize="3em" />
        </Link>
);

export default StartButton;
