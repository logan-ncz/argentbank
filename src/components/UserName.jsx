import { useSelector } from "react-redux";

export default function UserName({ typeName }) {
    const email = useSelector((state) => state.user.email);
    const users = useSelector((state) => state.user.users)

    const userConnected = !email ? users : users.filter(user => user.email === email)[0];
    const firstName = userConnected.firstName
    const lastName = userConnected.lastName

    if(typeName === 'firstName') {
        return (
            <p>{firstName}</p>
        )
    } else if (typeName === 'lastName' ) {
        return (
            <p>{lastName}</p>
        )
    } else {
        return (
            <p>{firstName} {lastName}</p>
        )
    }
    
}