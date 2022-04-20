// import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UserName from "../components/UserName";

export default function UserProfile() {
    const token = useSelector((state) => state.user.token);
    
    const email = useSelector((state) => state.user.email);
    const users = useSelector((state) => state.user.users)

    const userConnected = !email ? users : users.filter(user => user.email === email)[0];
    const userFirstName = userConnected.firstName

    // const [editionMode, setEditionMode] = useState(false);

    // const toggleEditionMode = () => setEditionMode(!editionMode);

    if (!token) return <Navigate to="/" />;

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userFirstName}!</h1>
                <button className="edit-button">Edit Name</button>
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