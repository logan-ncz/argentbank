import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName } from "../redux/reducers";
// import { setFirstName, setLastName } from "../redux/reducers";
// import UpdateUserProfile from "../utils/hooks/UpdateUserProfile";

export default function EditNameForm(props) {
    
    const token = useSelector((state) => state.user.token);
    const userFirstName = useSelector((state) => state.user.firstName);
    const userLastName = useSelector((state) => state.user.lastName);
    const dispatch = useDispatch();

    const [ userInputs, setUserInputs ] = useState({
        firstName: '',
        lastName: '',
    });

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
    };

    const updateFunction = () => {
        const url = "http://localhost:3001/api/v1/user/profile";

        const userInfosPayload = {
            firstName: userInputs.firstName,
            lastName: userInputs.lastName,
        }

        const requestOptions = {
            method: "PUT",
            body: JSON.stringify(userInfosPayload),
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
    
        // Send PUT request:
        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            console.log("/user/profile response to PUT:", json);
            dispatch(setFirstName(userInputs.firstName))
            dispatch(setLastName(userInputs.lastName))
        })
        .catch((error) => {
            console.error(
            `An error has occured while posting to /user/profile: ${error}`
            );
        });
    };
    
    return (
        <form onSubmit={handleEditFormSubmit} className="editNameForm">
            <div>
                <input
                    type="text"
                    id="firstName"
                    placeholder={userFirstName}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    id="lastName"
                    placeholder={userLastName}
                    onChange={handleInputChange}
                />

                
            </div>
            
            <div>
                <button className="editNameForm-saveBtn" type="submit">Save</button>

                <button className="editNameForm-cancelBtn" type="button" onClick={props.toggleEditionMode}>Cancel</button>
            </div>
        </form>
    )
}