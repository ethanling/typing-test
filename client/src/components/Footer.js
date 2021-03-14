import React from "react";
import { StyledFooter, StyledFooterLink } from "../styles/StyledFooter";

const Footer = () => {
    return (
        <StyledFooter>
            Built with{" "}
            <span role="img" aria-label="coffee">
                ☕
            </span>{" "}
            by{" "}
            <StyledFooterLink href="https://ethanling.com">
                Ethan Ling
            </StyledFooterLink>{" "}
            in 2020.
        </StyledFooter>
    );
};

export default Footer;
