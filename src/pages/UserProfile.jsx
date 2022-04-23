// import { useState } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AccountCard from "../components/AccountCard";
import EditNameForm from "../components/EditNameForm";
import { USER_ACCOUNTS } from "../data/userAccountsMock";
import useGetUserProfile from "../utils/hooks/GetUserProfile";

export default function UserProfile() {
    const token = useSelector((state) => state.user.token);

    const userFirstName = useSelector((state) => state.user.firstName)

    const [editionMode, setEditionMode] = useState(false);

    const toggleEditionMode = () => setEditionMode(!editionMode);

    useGetUserProfile(token)

    if (!token) return <Navigate to="/" />;

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back</h1>
                <h2>{userFirstName}!</h2>
                {editionMode ?
                <EditNameForm toggleEditionMode={toggleEditionMode} /> :
                <button className="edit-button" onClick={toggleEditionMode}>Edit Name</button>
                }
                
            </div>
            <h2 className="sr-only">Accounts</h2>
            {USER_ACCOUNTS.map(({ accountName, amount, balanceType }, index) => (
                <AccountCard
                    key={`account-card-${index}`}
                    accountName={accountName}
                    amount={amount}
                    balanceType={balanceType}
                />
            ))}
        </main>
    )
}