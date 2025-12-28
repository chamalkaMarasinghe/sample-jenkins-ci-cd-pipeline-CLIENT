import React, { useEffect } from "react";
import { CONFIGURATIONS } from "../config/envConfig";
import { useThunk } from "../hooks/useThunk";
import { signUploadUrl } from "../store/thunks/fileThunk";

const Orders = () => {

    const [doSignUploadUrl, isSignUploadUrl, errorSignUploadUrl] = useThunk(signUploadUrl);

    useEffect(() => {
        signUploadUrlMethod()
    }, [])

    const signUploadUrlMethod = async () => {
        const res = await doSignUploadUrl();
        console.log(res);
        if(res?.susccess){
            console.log("successed signing url");
        }else{
            console.log("failed signing url");
        }
    }

    return (
        <>
            <div className="max-w-4xl px-6 py-10">
                <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
                    Welcome to my orders page
                </h1>
                <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
                    REPO : {CONFIGURATIONS.REPO}
                </h1>
            </div>
        </>
    );
};

export default Orders;
