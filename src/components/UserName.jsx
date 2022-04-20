import { useSelector } from "react-redux";

export default function UserName() {

    const userFirstName = useSelector((state) => state.user.firstName)
    
    return (
        <p>{userFirstName}</p>
    )
}