import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import appAuth from "../authentication/config.js";
import { AuthContext } from "../authentication/Auth.js";
import LoginForm from "../components/LoginForm";

// Copied from other personal project, needs to be updated for current use

const StyledWrapper = styled.div`
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    justify-content: center;
    margin-top: 2em;
`;

const StyledLinkContainer = styled.div`
    padding: 2em;
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    color: #fafafa;
    display: block;
    margin-bottom: 1em;
    font-size: 0.85em;

    :visited {
        color: #fafafa;
    }
`;

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await appAuth
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <LoginForm action={handleLogin} />
            <StyledLink to="/sign-up">Don't have an account?</StyledLink>
            <StyledLink to="/reset-password">Can't sign in?</StyledLink>
        </>
    );
};

export default withRouter(Login);
