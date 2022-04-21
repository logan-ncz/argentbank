import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetUserProfile from "../utils/hooks/GetUserProfile";
// import { setFirstName, setLastName } from "../redux/reducers";
// import UpdateUserProfile from "../utils/hooks/UpdateUserProfile";

export default function EditNameForm(props) {
    
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const [ userInputs, setUserInputs ] = useState({
        firstName: '',
        lastName: '',
    });

    // const [editFormIsSubmited, setEditFormIsSubmited] = useState(false);

    const handleInputChange = (event) => {
        const inputName = event.target.id;

        setUserInputs({
            ...userInputs,
            [inputName]: event.target.value,
        });
    };
    
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        updateFunction()

        props.toggleEditionMode()

        GetUserProfile(token)
    };

    // console.log(
    //     "userInputs =",
    //     userInputs,
    // );

    const updateFunction = () => {
        const url = "http://localhost:3001/api/v1/user/profile";

        const userInfosPayload = {
            firstName: userInputs.firstName,
            lastName: userInputs.lastName,
        }

        console.log(userInfosPayload)

        const requestOptions = {
            method: "PUT",
            body: JSON.stringify(userInfosPayload),
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        console.log(userInfosPayload , requestOptions)
    
        // Send PUT request:
        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            console.log("/user/profile response to PUT:", json);
        })
        .catch((error) => {
            console.error(
            `An error has occured while posting to /user/profile: ${error}`
            );
        });
    }

   
        

    
    return (
        <div className="editNameForm">
            <form onSubmit={handleEditFormSubmit}>
                <input
                type="text"
                id="firstName"
                placeholder="Your first name"
                onChange={handleInputChange}
                />

                <input
                type="text"
                id="lastName"
                placeholder="Your last name"
                onChange={handleInputChange}
                />

                <button className="editNameForm-saveBtn" type="submit">Save</button>

                <button className="editNameForm-cancelBtn" type="button" onClick={props.toggleEditionMode}>Cancel</button>
            </form>
        </div>
    )
}