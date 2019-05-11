import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600; 
    font-size: 12px;
`;
const List = styled.ul`
    display: flex;
`;
const ListItem = styled.li`
    &:not(:last-child){
        margin-right:20px;
    }
`;
const Link = styled.a`
    color: ${props => props.theme.darkBlueColor};
`;
const Copyright = styled.span`
    color: ${props => props.theme.darkGrayColor};
`;

export default () => (
    <Footer>
        <List>
            <ListItem>
                <Link href="#">SUPPORT</Link>
            </ListItem>
            <ListItem>
                <Link href="#">ABOUT US</Link>
            </ListItem>
            <ListItem>
                <Link href="#">PRESS</Link>
            </ListItem>
            <ListItem>
                <Link href="#">API</Link>
            </ListItem>
            <ListItem>
                <Link href="#">JOBS</Link>
            </ListItem>
            <ListItem>
                <Link href="#">PRIVACY</Link>
            </ListItem>
            <ListItem>
                <Link href="#">TERMS</Link>
            </ListItem>
            <ListItem>
                <Link href="#">DIRECTORY</Link>
            </ListItem>
            <ListItem>
                <Link href="#">PROFILES</Link>
            </ListItem>
            <ListItem>
             <Link href="#">HASHTAGS</Link>
            </ListItem>
            <ListItem>
                <Link href="#">LANGUAGE</Link>
            </ListItem>
        </List>
        <Copyright>
            © 2019 PRISMAGRAM
        </Copyright>
    </Footer>
)