import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/userContext";
import { gql, useMutation } from "@apollo/client";
import { isEmpty, checkForMatchingPasswords } from "../../utils/validators";

export const REGISTER_NEW_USER = gql`
    mutation registerNewUser($newUser: UserInput!) {
        registerUser(newUser: $newUser) {
            id
            email
            fname
            lname
        }
    }
`;

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);
    const [userForm, setUserForm] = useState({
        Email: "",
        Password: "",
        "Confirm password": "",
        "First name": "",
        "Last name": "",
    });
    const [formErrors, setFormErrors] = useState([]);

    // Do I need to know when user changes? Would it be better handle setUser and navigate in successful api call?
    // Rather than setting user from successful registration, is it better to return to login?
    useEffect(() => {
        if (Object.keys(user).length > 0) {
            console.log("USER HAS CHANGED!");
            console.log(user);
        }
    }, [user]);

    function handleInputChange(e) {
        setUserForm({
            ...userForm,
            [e.target.name]: String(e.target.value).trim(),
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateNewUserForm(userForm)
            ? registerNewUser({
                  variables: {
                      newUser: {
                          email: String(userForm["Email"]),
                          password: String(userForm["Password"]),
                          fname: String(userForm["First name"]),
                          lname: String(["Last name"]),
                      },
                  },
              })
            : console.log("New User form validation failed...");
    }

    function validateNewUserForm(formData) {
        const errors = [
            ...checkForEmptyValues(formData),
            ...checkForMatchingPasswords(
                formData["Password"],
                formData["Confirm password"]
            ),
        ];
        setFormErrors(errors);
        return errors.length === 0;
    }

    function checkForEmptyValues(inputValues) {
        return Object.entries(inputValues).reduce((arr, [key, val]) => {
            isEmpty(val) && arr.push(`${key} field cannot be empty`);
            return arr;
        }, []);
    }

    const [registerNewUser, { loading }] = useMutation(REGISTER_NEW_USER, {
        onCompleted: (data) => {
            console.log("New user successfully registered!");
            console.log(data.registerUser);
            // setUser(data);
            navigate("/");
        },
        onError: (error) => {
            console.log("Uh oh, something went wrong...");
            console.log(error);
            setFormErrors([error]);
        },
    });

    return (
        <>
            <h1>Let's get you registered!</h1>
            <form id="register-form" onSubmit={handleSubmit}>
                {Object.entries(userForm).map(([propKey, propVal], index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={propKey}>{propKey}: </label>
                            <input
                                name={propKey}
                                value={propVal}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                    );
                })}
                {formErrors && (
                    <div>
                        <ul>
                            {formErrors.map((error, id) => (
                                <li key={id}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </>
    );
}
