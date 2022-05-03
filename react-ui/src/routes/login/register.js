import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/userContext';

export default function Register() {
    const [ user, setUser ] = useContext(UserContext);
    const [ newUser, setNewUser ] = useState({
        "Email": '',
        "Password": '',
        "Confirm password": '',
        "First name": '',
        "Last name": ''
    });
    const [ formErrors, setFormErrors ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            console.log('USER HAS CHANGED!');
            console.log(user);
            navigate('/');
        }
    }, [ user ]);

    function handleInputChange(e) {
        setNewUser({
            ...newUser,
            [e.target.name]: String(e.target.value).trim()
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        validateNewUserForm(newUser) ? 
            registerUser(newUser) :
            console.log('New User form validation failed...'); // remove before merge
    };

    function registerUser(user) {
        // TODO: POST new user to API
        console.log('REGISTERING USER WITH API...'); // remove before merge
        const registerUser = newUser
        setUser(registerUser);
    };

    function validateNewUserForm(formData) {
        const newErrors = [
            ...checkForEmptyValues(formData),
            ...checkForMatchingPasswords(formData['Password'], formData['Confirm password'])
        ];
        setFormErrors(newErrors);
        return newErrors.length === 0;
    };

    function checkForEmptyValues(props) {
        return Object.entries(props).reduce((arr, [key, val]) => {
            isEmpty(val) && arr.push(`${key} field cannot be empty`);
            return arr;
        }, []);
    };

    function checkForMatchingPasswords(pass1, pass2) {
        return pass1 === pass2 ? [] : [`Passwords do not match`];
    }

    function isEmpty(value) {
        return ['', undefined, null, [], {}].includes(value);
    };

    return (
        <>
            <h1>Let's get you registered!</h1>
            <form id="register-form" onSubmit={handleSubmit}>
                {Object.entries(newUser).map(([propKey, propVal], index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={propKey}>{propKey}: </label>
                            <input name={propKey} value={propVal} onChange={handleInputChange}></input>
                        </div>
                    )
                })}
                {formErrors && <div>
                    <ul>
                        {formErrors.map((error, id) => <li key={id}>{error}</li>)}
                    </ul>
                </div>}

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </>

    )
}