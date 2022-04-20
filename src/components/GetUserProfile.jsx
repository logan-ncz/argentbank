import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../redux/reducers";

export default function GetUserProfile(token) {
    const dispatch = useDispatch()

    useEffect(() => {
        const url = "http://localhost:3001/api/v1/user/profile";

        const requestOptions = {
            method: "POST",
            body: '',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    
        // Send POST request:
        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            dispatch(setFirstName(json.body.firstName));
            dispatch(setLastName(json.body.lastName));
    
            console.log("/user/profile response to POST:", json);
        })
        .catch((error) => {
            console.error(
            `An error has occured while posting to /user/profile: ${error}`
            );
        });
    }, [dispatch, token])
}