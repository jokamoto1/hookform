import React, { useState } from "react";
const UserInput = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    // const renderUser = () => {
    //     const newUser = { firstName, lastName, email, password, confirmPassword };
    //     console.log("Welcome", newUser);
    // }
    const handleValidation = (e) => {
        if (e.target.name === "firstName") {
            setFirstName(e.target.value)
            if (e.target.value.length < 2) {
                setFirstNameError("First name must be at least 2 characters!")
            } else {
                setFirstNameError("")
            }
        }
        if (e.target.name === "lastName") {
            setLastName(e.target.value)
            if (e.target.value.length <= 2) {
                setLastNameError("Last name must be at least 2 characters!")
            } else {
                setLastNameError("")
            }
        }
        if (e.target.name === "email") {
            setEmail(e.target.value)
            if (e.target.value.length <= 5) {
                setEmailError("Email must be at least 5 characters!")
            } else {
                setEmailError("")
            }
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
            if (e.target.value.length <= 8) {
                setPasswordError("Password must be 8 characters!")
            } else {
                setPasswordError("")
            }
        }
        if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value)
            if (e.target.value !== password) {
                setConfirmPasswordError("Passwords must match!")
            } else {
                setConfirmPasswordError("")
            }
        }
    }
    return (
        <div>
            <form onChange={handleValidation}>
                <div>
                    <label>First Name: </label>
                    <input name="firstName" type="text" onChange={(e) => (setFirstName)} value={firstName} />
                    {
                        firstNameError ?
                            <p>{firstNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" onChange={(e) => (setLastName)} value={lastName} />
                    {
                        lastNameError ?
                            <p>{lastNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    {
                        emailError ?
                            <p>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    {
                        passwordError ?
                            <p>{passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name="confirmPassword" type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    {
                        confirmPasswordError ?
                            <p>{confirmPasswordError}</p> :
                            ''
                    }
                </div>
            </form>
            <div>
                <p>Your Form Data</p>
                <p>First Name {firstName}</p>
                <p>Last Name {lastName}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPassword}</p>
            </div>
        </div>
    )
}
export default UserInput