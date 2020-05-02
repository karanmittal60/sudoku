import React, {useState} from 'react';
import usePikachu from "../../hooks/usePikachu";
import {routeRules} from "../../routes/routeRules";

const Login = (props) => {

    const { setToken, setUserDetails } = usePikachu();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const URL ="http://staging.prozo.com/api/v3";

    const login = (e) => {
        e.preventDefault();

        const data =  {
            username: userId,
            password: password
        };

        fetch(
            `${URL}/auth`,
            {
                method: 'POST',
                headers :{
                    tenant: "tenant_3",
                    source: "2" ,
                    'Content-Type' :  'application/json'
                },
                body: JSON.stringify(data)
            }
        )
            .then(response  => response.json())
            .then(response  => {
                localStorage.setItem('token', response.token);
                setToken(response.token);
                setUserDetails(response.id);
                props.history.push(routeRules.users)
            })
            .catch(err => {
                console.log("error",err)
            })
    };

    return (
        <div className="container">
            <div className="login">
                <div className="text-center">
                    <h3>Welcome to Prozo</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter UserId"
                               onChange={({target: {value}}) => setUserId(value)}
                               value={userId}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               value={password}
                               onChange={({target: {value}}) => setPassword(value)}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={login}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;