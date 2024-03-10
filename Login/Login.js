import { useState } from "react";

function Login() {


    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    const [type, setType] = useState("password")

    const [caseType, setcaseType] = useState("bi-eye-slash")

    const chageUserData = (e) => {
        if (e.target.name === "email") {
            setUserData(
                {
                    ...userData,
                    email: e.target.value
                }
            )
            setErrors({
                ...errors,
                emailError: e.target.value.length === 0 ? "Email is required" : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value) && "please enter a valid email"
            })
        } else {
            setUserData(
                {
                    ...userData,
                    password: e.target.value
                }
            )
            setErrors({
                ...errors,
                passwordError: e.target.value.length === 0 ? "password is required" : e.target.value.length < 8 && "password must be more than 8 charcters"
            })
        }

    }
    const submitData = (e) => {
        if (!errors.emailError || !errors.passwordError) {
            e.preventDefault()
        }
    }

    const changetype = (e) => {
        e.preventDefault();
        type === 'password' ? setType('text') : setType('password');
        caseType === "bi-eye-slash" ? setcaseType('bi-eye') : setcaseType("bi-eye-slash");
    }
    return (
        <>
            <div className="container w-50 mt-5 border">
                <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control me-3"
                            value={userData.email}
                            onChange={(e) => chageUserData(e)}
                            name="email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div className="form-text">
                            <p className="text-danger"> {errors.emailError}  </p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <div className="d-flex  justify-content-between align-items-center">
                            <input
                                type={type}
                                className="form-control me-3"
                                value={userData.password}
                                onChange={(e) => chageUserData(e)}
                                name="password"
                                id="exampleInputPassword1"
                            />
                            <button className="btn btn-primary" onClick={(e) => changetype(e)}>
                                <i className={`bi ${caseType}`}></i>
                            </button>
                        </div>

                    </div>
                    <div className="form-text">
                        <p className="text-danger"> {errors.passwordError}  </p>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3" onClick={(e) => submitData(e)}>
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default Login;