import React, { useContext } from "react";
import { AuthContext } from "../authentication/Auth";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import Button from "./Button";
import { StyledToolBar, StyledLogo } from "../styles/StyledToolbar";

const ToolBar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <StyledToolBar>
            <StyledLogo>
                <Link to={"/"}>
                    Typical
                    <span className="highlight">Type</span>
                </Link>
            </StyledLogo>
            {currentUser ? (
                <LogOutButton />
            ) : (
                <Link to={"/login"}>
                    <Button text={"Sign In"} />
                </Link>
            )}
        </StyledToolBar>
    );
};

export default ToolBar;
