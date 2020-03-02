import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const StartButton = () => (
        <Link to="/test">
            <Button text="Begin" textSize="2em" />
        </Link>
);

export default StartButton;
