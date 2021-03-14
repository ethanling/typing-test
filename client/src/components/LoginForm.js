import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledLoginWrapper = styled.div`
    padding-bottom: 2em;
    h2 {
        display: inline-block;
        whitespace: nowrap;
        font-size: 5em;
        margin: 0;
        /* color: #1a1a1a; */
        opacity: 0.6;
    }
`;

const StyledLoginForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    padding: 30px 0 15px 0;
    border-radius: 8px;
`;

const StyledRow = styled.div`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    padding: 0 2.25em 0 2.25em;
`;

const StyledInput = styled.input`
    background-color: #fafafa;
    border: none;
    font-size: 1.25em;
    outline: none;
    border-radius: 8px;
    font-weight: bold;
    padding: 12px 16px 12px 16px;
`;

const StyledLabel = styled.label`
    display: block;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1em;
`;

const LoginForm = ({ action }) => {
    return (
        <StyledLoginWrapper>
            <StyledLoginForm onSubmit={action}>
                <StyledRow>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput
                        name="email"
                        type="email"
                        placeholder="me@example.com"
                    />
                </StyledRow>
                <StyledRow>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </StyledRow>
                <StyledRow>
                    <Button type="submit" text="Log In" />
                </StyledRow>
            </StyledLoginForm>
        </StyledLoginWrapper>
    );
};

export default LoginForm;
