### Some Component Note Will Help React Project


## show password or text
```
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label htmlFor="password" className="block w-full pb-2 pt-8 font-semibold">
                Password <span className="text-sm opacity-50">min. 8 char</span>
                <span className="text-red-600">*</span>
            </label>

            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="r rounded-md w-full py-3 px-4 bg-[#302D3D] pr-12" // Add pr-12 to provide space for the icon
                    placeholder="Enter password here.."
                />
                <span 
                    className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}
                </span>
            </div>
        </div>
    );
};

export default PasswordInput;

```

### React Hook - useRef
```
import React, { useRef, useContext } from 'react'; // Import useRef and useContext
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Assume a login function that returns a user object on successful login
        login(email, password).then(user => {
            setUser(user);
            navigate('/');
        }).catch(error => {
            console.error('Login error:', error);
        });
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="password" ref={passwordRef} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

```



### `???`
