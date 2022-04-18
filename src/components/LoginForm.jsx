import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { setEmail, setToken } from "../redux/reducers";

export default function LoginForm() {

    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const [userInputs, setUserInputs] = useState({
        email: '',
        password: '',
    });
    const [formIsSubmited, setFormIsSubmited] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleInputChange = (event) => {
        const inputName = event.target.id;
    
        setUserInputs({
          ...userInputs,
          [inputName]: event.target.value,
        });
        setSubmitError(false);
    };

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();

        setFormIsSubmited(true);
    };

    console.log(
        "userInputs =",
        userInputs,
        "| formIsSubmited",
        formIsSubmited,
        "| submitError =",
        submitError
    );

    useEffect(() => {
        if (formIsSubmited) {
            const url = "http://localhost:3001/api/v1/user/login";

            const loginPayload = {
            email: userInputs.email,
            password: userInputs.password,
            };

            const requestOptions = {
            method: "POST",
            body: JSON.stringify(loginPayload),
            headers: {
                "Content-Type": "application/json",
            },
            };

            // Send POST request:
            fetch(url, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                dispatch(setEmail(userInputs.email));
                dispatch(setToken(json.body.token));

                console.log("/user/login response to POST:", json);
            })
            .catch((error) => {
                setSubmitError(true);

                setUserInputs({
                ...userInputs,
                });

                console.error(
                `An error has occured while posting to /user/login: ${error}`
                );
            });

            setFormIsSubmited(false);
        }
    }, [dispatch, userInputs, formIsSubmited]);

    if (token) return <Navigate to="/profile" />
    
    return (
        <form onSubmit={handleLoginFormSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={handleInputChange} />
            </div>

            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleInputChange} />
            </div>

            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button">Sign In</button>
        </form>
    )
}