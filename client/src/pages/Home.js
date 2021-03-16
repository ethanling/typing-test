import React from "react";
import Splash from "../components/Splash";
import StartButton from "../components/StartButton";
import TestPicker from "../components/TestPicker";
import { Col, Row } from "../styles/StyledPage";

const Home = () => {
    return (
        <Splash>
            <StartButton />
        </Splash>
    );
};

export default Home;
