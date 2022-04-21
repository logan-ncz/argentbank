// import { useState } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import EditNameForm from "../components/EditNameForm";
import GetUserProfile from "../utils/hooks/GetUserProfile";

export default function UserProfile() {
    const token = useSelector((state) => state.user.token);

    const userFirstName = useSelector((state) => state.user.firstName)

    const [editionMode, setEditionMode] = useState(false);

    const toggleEditionMode = () => setEditionMode(!editionMode);

    if (!token) return <Navigate to="/" />;

    GetUserProfile(token)

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
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}