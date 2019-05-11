import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";


export default () => {
    const [action, setAction] = useState("logIn");
    const userName = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const secretKey = useInput("");
    const email = useInput("happy0351@gmail.com");
    const requestSecret = useMutation(LOG_IN, {
        update: (_,{data}) => {
            const { requestSecret } = data;
            if(!requestSecret){
                toast.error("You don't have an account yet, create one");
                setTimeout(() => setAction("signUp"), 2000);
            } else {
                toast.success("Check your mail for your login secret");
                setAction("confirm");
            }
        },
        variables: { email:email.value}
    });

    const createAccount = useMutation(CREATE_ACCOUNT, {
        variables: { 
            userName: userName.value,
            email: email.value, 
            firstName: firstName.value,
            lastName: lastName.value
        }
    })

    const confirmSecret = useMutation(CONFIRM_SECRET, {
        variables: {
            secret: secretKey.value,
            email: email.value
        }
    });

    const localLogIn = useMutation(LOCAL_LOG_IN);

    const onSubmit = async(e) => {
        if(action === "logIn"){
            if(email !== ""){
                requestSecret(email);
            }else{
                toast.error("Email is Required");
            }
        }else if(action === "signUp"){
            if(email.value !== "" &
                userName.value !== "" &
                firstName.value !== "" &
                lastName.value !== ""){
                try{
                    const {data} = await createAccount(userName, email, firstName, lastName);
                    if(!data.createAccount){
                        toast.error("cant create account");
                    }else{
                        toast.success("account created! log in now!");
                        setTimeout( () => setAction("logIn"),3000);
                    }
                }catch(e){
                    toast.error(e.message);
                }
            }
        }else if(action === "confirm"){
            const secret = secretKey;

            if(secret.value !== ""){
                try{
                    const {data:{confirmSecret : token}} = await confirmSecret(secret, email);
                    if(token !== "" && token !== undefined){
                        localLogIn({variables: {token}});
                    }
                }catch(error){
                    toast.error("Cant confirm secret");
                }
            }
        }else{
            toast.error("All field are Required")
        }
    }

    return <AuthPresenter action={action}
                          setAction={setAction}
                          userName={userName}
                          firstName={firstName}
                          lastName={lastName}
                          onSubmit={onSubmit}
                          email={email}
                          secretKey={secretKey}
                          />
}