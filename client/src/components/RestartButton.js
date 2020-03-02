import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import Button from "./Button";

const RestartButton = ({ text }) => {
    const [, dispatch] = useContext(StateContext);

    const resetState = () => {
        dispatch({ type: "reset" });
    };

    return <Button action={resetState} text={text ? text : "Restart"} />;
};

export default RestartButton;
