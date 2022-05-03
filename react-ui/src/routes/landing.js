import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../components/userContext';

export default function Landing() {
    const [ user, setUser ] = useContext(UserContext);

    return (
        <div>
            <h1>Welcome to Ledger</h1>
            {Object.keys(user).length > 0 ? 
                (<div className="btn-group">
                    <Link to="dashboard">
                        <button width="100%">Go to your dashboard</button>
                    </Link>
                </div>) :
                (<div className="btn-group">
                    <Link to="login">
                        <button>log in</button>
                    </Link>
                    <Link to="register">
                        <button>register</button>
                    </Link>
                </div>)
            }
        </div>
    )
}