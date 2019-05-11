import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";


const Wrapper = styled.div`
min-height: 80vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`;

const Box = styled.div`
${props => props.theme.whiteBox};
border-radius: 0px;
width: 100%;
max-width: 350px;
`;

const StateChanger = styled(Box)`
text-align:center;
padding: 20px 0px;
`;

const Link = styled.span`
color: ${props => props.theme.blueColor };
cursor: pointer;
`;

const Form = styled(Box)`
padding: 40px;
padding-bottom: 30px;
margin-bottom: 15px;
input {
    width: 100%;
    &:not(:last-child){
        margin-bottom:5px;
    }
}
button {
    margin-top : 5px;
}
`;

export default ({action, userName, firstName, lastName, email, setAction, onSubmit, secretKey}) => (
    <Wrapper>
    <Form>
        {action === "logIn" && (
            <form onSubmit={onSubmit}>
                <Input placeholder={"Email"} {...email} type="email"></Input>
                <Button text={"Log In"}/>
            </form>
        )}
        {action === "confirm" && (
            <form onSubmit={onSubmit}>
                <Input placeholder={"Paste your secretKey"} {...secretKey} type="password"/>
                <Button text={"Confirm"}/>
            </form>
        )}
        {action === "signUp" && (
            <form onSubmit={onSubmit}>
                <Input placeholder={"First Name"} {...firstName}></Input>
                <Input placeholder={"Last Name"} {...lastName}></Input>
                <Input placeholder={"Email"} {...email} type="email"></Input>
                <Input placeholder={"UserName"} {...userName}></Input>
                <Button text={"Sign Up"}/>
            </form>
        )}
    </Form>
    <StateChanger>
        {action === "logIn" 
            ? (
                <>
                    Don't have an account?&nbsp;
                    <Link onClick={() => setAction("signUp")}>&nbsp;Sign up</Link>
                </>
            )
            : (
                <>
                    Have an account?&nbsp;
                    <Link onClick={() => setAction("logIn")}>&nbsp;Log in</Link>
                </>
            )
        }
    </StateChanger>
</Wrapper>
)