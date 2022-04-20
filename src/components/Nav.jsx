import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { setEmail, setToken } from '../redux/reducers';

import ArgentBankLogo from '../img/argentBankLogo.png'
import UserName from './UserName';

export default function Nav() {
    const token = useSelector((state) => state.user.token);
    
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setEmail(""));
        dispatch(setToken(""));
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={ArgentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <ul>
                <li>
                    {token ?
                    <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle main-nav-item-connected"></i>
                        <UserName />
                    </Link> : 
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>}
                </li>
                
                {token ? 
                    <li>
                    <i className="fas fa-sign-out-alt"></i>

                    <Link to="/" onClick={logout}>
                        <p>Sign Out</p>
                    </Link>
                    </li>
                     : null
                }

            </ul>
        </nav>
    )
}