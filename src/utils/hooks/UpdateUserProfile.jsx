import { useEffect } from "react";
import { useSelector } from "react-redux";

// export default function UpdateUserProfile(token) {
//     const userFirstName = useSelector((state) => state.user.firstName)
//     const userLastName = useSelector((state) => state.user.lastName)

//     useEffect(() => {
//             const url = "http://localhost:3001/api/v1/user/profile";

//             const userInfosPayload = {
//                 firstName: userFirstName,
//                 lastName: userLastName,
//             }

//             const requestOptions = {
//                 method: "PUT",
//                 body: userInfosPayload,
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             };
        
//             // Send PUT request:
//             fetch(url, requestOptions)
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log("/user/profile response to PUT:", json);
//             })
//             .catch((error) => {
//                 console.error(
//                 `An error has occured while posting to /user/profile: ${error}`
//                 );
//             });
        
//     }, [token, userFirstName, userLastName])
// }