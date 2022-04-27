import { Link } from 'react-router-dom'
import ArgentBankLogo from '../img/argentBankLogo.png'

import { useDispatch, useSelector } from 'react-redux';

import { setEmail, setToken } from '../redux/reducers';

import { selectUserName } from "../redux/selectors";


export default function Nav() {
    const token = useSelector((state) => state.user.token);

    const firstName = useSelector(selectUserName('firstName'))
    
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
                            <p>{firstName}</p>
                        </Link>
                        :
                        <Link className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle main-nav-item-signin"></i>
                            Sign In
                        </Link>
                    }
                </li>
                
                {token &&
                    <li>
                        <Link className="main-nav-item " to="/" onClick={logout}>

                        <i class="fa fa-sign-out main-nav-item-signout"></i>
                            <p>Sign Out</p>
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}